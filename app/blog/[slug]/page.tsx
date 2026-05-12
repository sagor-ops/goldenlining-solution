import { notFound } from "next/navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

const BlogPostContent = dynamic(() => import("@/components/BlogPostContent"));
const Footer          = dynamic(() => import("@/components/Footer"));

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://goldenlining.com.au";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | Goldenlining Solution" };

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      "digital marketing",
      "web design Australia",
      "SEO tips",
      "Goldenlining Solution",
    ],
    alternates: { canonical: canonicalUrl },
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      siteName: "Goldenlining Solution",
      tags: [post.category, "digital marketing", "web design"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: "@goldenlining_au",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: canonicalUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: "Goldenlining Solution",
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Goldenlining Solution",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    articleSection: post.category,
    keywords: `${post.category}, digital marketing, web design Australia, SEO`,
    inLanguage: "en-AU",
    timeRequired: `PT${post.readTime.replace(/\D/g, "")}M`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  return (
    <main>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />
      <BlogPostContent post={post} related={related} />
      <Footer />
    </main>
  );
}
