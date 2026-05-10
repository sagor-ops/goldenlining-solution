export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  color: string;
  featured: boolean;
  content: string;
  author: { name: string; role: string; initials: string };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-website-is-losing-you-clients",
    category: "Design",
    title: "10 Signs Your Website Is Losing You Clients (And How to Fix It)",
    excerpt:
      "Most business owners don't realise their website is quietly costing them revenue every single day. Here are the warning signs — and what to do about each one.",
    readTime: "8 min read",
    date: "May 2025",
    color: "#d4af37",
    featured: true,
    author: { name: "Alexandra Chen", role: "Creative Director", initials: "AC" },
    content: `
Your website is often the first impression a potential client gets of your business. In the time it takes to read this sentence, a visitor has already decided whether they trust you — or clicked away to a competitor.

The uncomfortable truth is that most websites are quietly leaking revenue every single day. Here are the ten most common warning signs, and exactly what to do about each one.

## 1. Your Website Takes More Than 3 Seconds to Load

Speed is the single most impactful factor for both conversion and search ranking. Research consistently shows that every additional second of load time reduces conversions by up to 7%. If your site takes more than three seconds to load on mobile, you are losing clients before they even see your offer.

**The fix:** Compress images to WebP format, enable browser caching, use a content delivery network (CDN), and audit your plugins or scripts for anything that adds unnecessary load time.

## 2. It Looks Like It Was Built in 2015

Design trends move fast. A website that looked modern five years ago now signals to visitors that your business may be similarly dated. Potential clients make this judgment in under 50 milliseconds — before reading a single word.

**The fix:** Invest in a professional redesign that reflects current design standards: clean white space, modern typography, purposeful animation, and a premium visual identity that instills confidence.

## 3. Your Mobile Experience Is an Afterthought

Over 60% of web traffic now comes from mobile devices. If your website requires pinching, zooming, or horizontal scrolling on a phone, the majority of your visitors are having a frustrating experience — and leaving.

**The fix:** Your website must be designed mobile-first, not mobile-adapted. Every button, form, and content block should be optimised for a small screen before scaling up to desktop.

## 4. There Is No Clear Call to Action

Visitors need to be told exactly what to do next. A website without a prominent, compelling call to action leaves potential clients without direction — and they leave.

**The fix:** Every page should have one primary CTA that is immediately visible without scrolling. "Book a Free Consultation," "Get a Quote," or "Contact Us Today" — make it specific, benefit-led, and impossible to miss.

## 5. Your Contact Form Is Buried or Broken

It sounds obvious, but a surprising number of businesses have contact forms that are difficult to find, require too many fields, or — critically — are broken and silently failing to deliver enquiries.

**The fix:** Place your contact information and a short contact form prominently. Test your form monthly. Consider adding a live chat option for visitors who want an immediate response.

## 6. Your Content Is All About You, Not Your Client

"We are a leading provider of..." — this opener tells visitors nothing useful. Potential clients arrive at your website with a problem they need solved. If your content doesn't speak directly to their situation, they will find someone whose does.

**The fix:** Reframe every piece of content around the client's outcome. Instead of "We design websites," write "Get a website that turns visitors into paying clients."

## 7. There Is No Social Proof

In a market full of competing claims, trust is the deciding factor. If your website has no client testimonials, case studies, or recognisable brand logos, visitors have no reason to believe your promises.

**The fix:** Add genuine testimonials with client names and businesses. Include before-and-after results where possible. Display logos of well-known clients you have worked with.

## 8. Your Branding Is Inconsistent

Mismatched fonts, inconsistent colours, and a logo that looks different across pages all erode the sense of professionalism that converts visitors into clients.

**The fix:** Establish a clear brand style guide and apply it rigorously across every page, image, and document. Consistency signals that your business pays attention to detail — and that attention extends to client work.

## 9. You Have No Blog or Fresh Content

A static website gives search engines nothing new to index and gives potential clients no reason to return. It also signals that your business is not actively engaged with its industry.

**The fix:** Publish one substantive blog post or insight per month minimum. Content that answers the real questions your ideal clients are asking is the most cost-effective marketing a business can invest in.

## 10. You Have No Idea How Your Website Is Performing

If you are not tracking key metrics — traffic, bounce rate, time on page, conversion events — you are flying blind. You cannot improve what you cannot measure.

**The fix:** Install Google Analytics 4 and set up conversion tracking for your key actions: form submissions, phone clicks, and consultation bookings. Review the data monthly and let it guide your decisions.

## The Bottom Line

Your website is not a cost — it is your most powerful sales tool, operating 24 hours a day. Every one of these issues is fixable, and addressing them systematically can transform a website from a liability into your top-performing revenue channel.

Not sure where your website stands? Our team offers a free digital audit that identifies exactly where your site is losing potential clients — and what to do about it.
    `.trim(),
  },
  {
    slug: "google-ads-stop-wasting-money",
    category: "Strategy",
    title: "Google Ads: How to Stop Wasting Budget and Start Getting Real ROI",
    excerpt:
      "Most businesses are burning money on Google Ads without knowing it. These are the exact mistakes that drain budgets — and the strategies that turn campaigns into consistent revenue.",
    readTime: "9 min read",
    date: "May 2025",
    color: "#3b82f6",
    featured: false,
    author: { name: "James Okafor", role: "SEO & AI Specialist", initials: "JO" },
    content: `
Google Ads is one of the most powerful tools available to any business — and one of the easiest ways to burn through a marketing budget with nothing to show for it. The platform rewards expertise and punishes guesswork.

After managing campaigns across dozens of industries, the same mistakes appear consistently. Here is exactly what they are, and how to fix each one.

## The Core Problem: Clicks ≠ Revenue

The biggest misconception about Google Ads is that more clicks means more business. Clicks are a cost. Revenue comes from the right clicks — people with genuine intent, searching for exactly what you offer, landing on a page specifically designed to convert them.

Optimising for clicks without considering the full funnel is how businesses spend thousands of dollars for enquiries that go nowhere.

## Mistake 1: Targeting Broad Match Keywords Without Controls

Broad match keywords tell Google to show your ad for "related" searches — and Google's definition of related is extremely generous. A plumbing business targeting "pipe repair" in broad match might find their ads appearing for "copper pipe prices," "DIY pipe fitting," and "pipe burst insurance claims." None of these are buyers.

**The fix:** Start with Exact Match and Phrase Match keywords. Build a robust negative keyword list to exclude irrelevant traffic. Expand to Broad Match only once you have proven conversion data to guide Google's algorithm.

## Mistake 2: Sending Traffic to Your Homepage

Your homepage is designed for multiple audiences with multiple purposes. A Google Ads visitor has a specific intent — and landing on a generic homepage forces them to do the work of finding what they searched for. Most won't bother.

**The fix:** Every campaign needs a dedicated landing page that mirrors the search intent exactly. If someone searches "affordable logo design," they should land on a page about logo design — not your homepage, and not your general services page.

## Mistake 3: Ignoring Quality Score

Quality Score is Google's rating of how relevant your ad and landing page are to the search query. A low Quality Score means you pay more per click than a competitor with a more relevant ad — even if you are bidding the same amount.

**The fix:** Align your keyword, ad copy, and landing page around a single tight theme. The search term, the headline, and the page content should all use the same language. This alone can reduce your cost-per-click by 20–50%.

## Mistake 4: Not Tracking Conversions Properly

If you cannot see which keywords and ads are generating enquiries — not just clicks — you are making bidding decisions in the dark. This is the single most common cause of wasted budget.

**The fix:** Set up conversion tracking in Google Analytics 4 and import the data into Google Ads. Track form submissions, phone calls, and live chat interactions. Every campaign decision should be driven by cost-per-conversion, not cost-per-click.

## Mistake 5: Running Ads 24/7 Without Ad Scheduling

Most businesses have peak enquiry windows — times when their ideal clients are actively searching and ready to engage. Running ads around the clock means paying for impressions during low-intent periods.

**The fix:** Review your conversion data by time of day and day of week. Increase bids during your highest-converting windows and reduce or pause ads during periods that consistently generate clicks but no conversions.

## Mistake 6: Neglecting the Search Terms Report

The Search Terms Report shows you exactly what people typed before clicking your ad. This is the most valuable data in any Google Ads account — and most businesses never look at it.

**The fix:** Review your Search Terms Report weekly. Add irrelevant searches to your negative keyword list. Identify new high-intent terms to add as exact match keywords.

## What a Well-Managed Campaign Looks Like

A Google Ads campaign that generates consistent ROI is characterised by:

- **Tight ad groups** — each group targets a single theme with 5–15 closely related keywords
- **Compelling ad copy** — headlines that mirror search intent and include a clear, specific offer
- **Dedicated landing pages** — built to convert one type of visitor with one clear action
- **Ongoing optimisation** — weekly adjustments based on real conversion data, not assumptions
- **Clear reporting** — cost per conversion tracked and benchmarked against revenue generated

## The Realistic Expectation

Google Ads is not a set-and-forget channel. The businesses that see strong, consistent returns are those that treat campaigns as an ongoing process of testing, learning, and refinement — not a one-time setup.

When managed correctly, Google Ads is one of the fastest ways to generate qualified enquiries for any business. The investment in proper management consistently pays for itself many times over.
    `.trim(),
  },
  {
    slug: "ecommerce-design-that-converts",
    category: "Design",
    title: "Why Your Ecommerce Store Is Losing Sales (And the Design Fixes That Work)",
    excerpt:
      "The average ecommerce site loses 70% of its visitors without a purchase. These are the design and UX decisions that separate stores converting at 1% from those converting at 4%.",
    readTime: "7 min read",
    date: "Apr 2025",
    color: "#10b981",
    featured: false,
    author: { name: "Alexandra Chen", role: "Creative Director", initials: "AC" },
    content: `
The average ecommerce website converts between 1% and 3% of its visitors. The best-performing stores convert at 4%, 5%, or higher. That gap — between 1% and 4% — on 10,000 monthly visitors is the difference between 100 sales and 400 sales per month, from the exact same traffic.

The difference is almost entirely design and user experience.

## Why Visitors Leave Without Buying

Most ecommerce purchases require a visitor to complete six to twelve steps: finding a product, viewing it, evaluating it, adding it to cart, providing contact details, entering payment information, and confirming the order. Every single step is an opportunity to lose the sale.

The role of ecommerce design is to make each of those steps feel effortless, trustworthy, and obvious.

## The High-Converting Product Page

The product page is where purchasing decisions are made. High-converting product pages share these characteristics:

### Multiple High-Quality Images
Visitors cannot touch, smell, or try on a product online. Images are the substitute for the physical experience. Every product should have a minimum of four images: front, back, detail, and in-context. Zoom functionality is non-negotiable.

### Clear, Benefit-Led Product Descriptions
Generic descriptions like "high-quality material" convert poorly. Specific, benefit-led descriptions — "maintains temperature for 12 hours, fits standard cup holders, dishwasher safe" — convert significantly better. Tell customers exactly what the product will do for them.

### Social Proof Above the Fold
Reviews and ratings should be visible without scrolling. A product with 47 reviews rated 4.8 stars is far more persuasive than the same product with no social proof. If you have reviews, display them prominently. If you don't, make collecting them a priority.

### A Single, Prominent Add-to-Cart Button
Your Add-to-Cart button should be the most visually dominant element on the page. It should be large, a contrasting colour, and always visible — especially on mobile.

## The Checkout Friction Problem

Research consistently shows that approximately 70% of shoppers who add items to a cart abandon before completing their purchase. The primary causes are preventable:

- **Forced account creation** — offer guest checkout as the default option
- **Unexpected costs** — display shipping costs before the final checkout step
- **Too many form fields** — collect only what is genuinely necessary
- **Lack of trust signals** — SSL badges, payment logos, and a clear return policy reduce purchase anxiety at the critical moment

Each of these friction points removed improves completion rates measurably.

## Mobile Commerce Is the Default

In 2025, the majority of online shopping happens on mobile devices. Yet most ecommerce conversion rate optimisation still focuses primarily on desktop. This is a significant missed opportunity.

A mobile-optimised ecommerce experience requires:

- **Thumb-friendly tap targets** — buttons and links sized for fingers, not cursors
- **Minimal typing** — autofill support for addresses and payment information
- **Fast page loads** — mobile users on variable connections need pages that load under 3 seconds
- **Simplified navigation** — product discovery on mobile must be intuitive with minimal taps

## Trust Architecture

First-time visitors to your store have no existing relationship with your brand. Converting them requires building sufficient trust in the time they spend on your site.

Trust signals that move the needle:
- **A physical address and phone number** — visible in the header or footer
- **Clear returns and refund policy** — ideally no-questions-asked
- **Secure payment logos** — Visa, Mastercard, PayPal, Apple Pay
- **Response time commitment** — "we respond to all enquiries within 2 hours"
- **Real customer photos** — user-generated content in reviews is significantly more persuasive than professional product shots alone

## The Measurable Outcome

Every design decision in ecommerce should be evaluated against a single question: does this make it easier for a customer to complete a purchase?

When product pages, checkout flows, and mobile experiences are designed with this question at the centre, conversion rates improve. And in ecommerce, even a 1% improvement in conversion rate is a material, measurable increase in revenue from the same traffic investment.
    `.trim(),
  },
  {
    slug: "what-makes-a-great-logo-design",
    category: "Branding",
    title: "What Actually Makes a Great Logo? A Designer's Honest Guide",
    excerpt:
      "Most logos are forgettable. A great logo does something far more powerful than look nice — it builds instant trust, communicates positioning, and works at every size and application.",
    readTime: "6 min read",
    date: "Apr 2025",
    color: "#8b5cf6",
    featured: false,
    author: { name: "Sofia Martinez", role: "Growth Strategist", initials: "SM" },
    content: `
A logo is the most distilled expression of what a brand stands for. In a single mark, it must communicate quality, positioning, personality, and trust — often in less than a second, and at sizes ranging from a business card to a billboard.

Most logos fail this test. They are generic, forgettable, or actively misrepresent the quality of the business they're meant to represent. Here is what separates the logos that work from the ones that don't.

## The Purpose of a Logo Is Not to Be Beautiful

This is the most common misconception in logo design. A logo's primary job is not aesthetic — it is strategic. A beautiful logo that communicates the wrong positioning, fails at small sizes, or looks identical to a competitor's has failed at its actual purpose.

Great logo design starts with clarity about what the logo needs to communicate, to whom, and in what contexts.

## The Five Qualities of a Logo That Works

### 1. Simplicity

The most iconic logos in the world are simple. This is not an accident. Simple marks are easier to remember, reproduce at any size, and apply to any medium. The temptation to include gradients, drop shadows, multiple fonts, and complex illustrations results in logos that look impressive on a designer's screen and terrible on a pen.

Simplicity is not a compromise — it is the goal.

### 2. Distinctiveness

Your logo must be immediately differentiable from every other logo in your industry. A generic globe, a generic tick, a generic shield — these are visual noise. A distinctive logo gives your brand a recognisable identity that accumulates value over time as it becomes associated with your quality of work.

### 3. Versatility

A professional logo works in all of these situations: in full colour, in black and white, reversed out of a dark background, at 16 pixels (favicon), at 2 metres (signage), embroidered on a shirt, printed on a pen, and in greyscale on a fax header.

If a logo requires colour to read clearly, has details that disappear at small sizes, or looks wrong in one colour, it has not been fully designed.

### 4. Appropriate for the Audience

A law firm's logo and a children's toy store's logo should look completely different — not because of arbitrary preference, but because their audiences have different visual expectations. Your logo should immediately feel appropriate to your industry while being distinctive enough to stand out within it.

### 5. Timelessness

Trend-following in logo design is dangerous. Logos are long-term assets that represent significant brand equity. A logo that looks dated five years after it was designed carries a hidden cost — it communicates that the business has not evolved. The best logos are designed to feel contemporary without being trendy.

## What the Briefing Process Should Look Like

A professional logo design engagement begins with understanding, not drawing. Before any concepts are produced, a thorough brief should establish:

- What the business does and who it serves
- How the business wants to be perceived (premium, approachable, technical, creative?)
- Who the direct competitors are and what their visual identity looks like
- Where the logo will primarily be used
- Any existing brand assets that must be preserved

Without this foundation, logo design is decoration rather than strategy.

## Why Cheap Logo Design Is Expensive

A logo purchased from a crowdsourcing platform for a few hundred dollars may look reasonable in the initial presentation. The problems typically emerge later: the files are not properly structured for print, the mark is not truly original, there is no strategy behind the design choices, and there is no designer relationship to call on when you need to adapt the logo for a new application.

The cost of rebranding — reprinting materials, updating digital assets, rebuilding brand recognition — consistently exceeds the cost of getting it right the first time.

## The Investment That Compounds

A great logo, properly designed and applied consistently, grows in value over time. Every touchpoint — every invoice, every social post, every storefront, every business card — adds to the accumulated brand recognition that becomes one of a business's most valuable intangible assets.

That compounding effect starts with one decision: to invest in a logo designed with purpose, not just aesthetics.
    `.trim(),
  },
  {
    slug: "seo-strategy-2025-guide",
    category: "SEO",
    title: "The Complete SEO Strategy Guide for 2025: What Still Works and What Doesn't",
    excerpt:
      "SEO in 2025 looks very different from five years ago. AI search, Core Web Vitals, and E-E-A-T have changed the rules. Here is what serious businesses need to know.",
    readTime: "10 min read",
    date: "Mar 2025",
    color: "#f59e0b",
    featured: false,
    author: { name: "James Okafor", role: "SEO & AI Specialist", initials: "JO" },
    content: `
Search engine optimisation in 2025 is both simpler and more demanding than it has ever been. Simpler, because the fundamentals have not changed: create genuinely useful content for real people on a technically sound website. More demanding, because the bar for "genuinely useful" keeps rising, and the competitive landscape grows more sophisticated every year.

Here is a clear-eyed look at what is working, what is not, and where serious businesses should be directing their SEO investment right now.

## What Has Changed in SEO

### AI-Generated Content Has Raised the Bar

The widespread availability of AI writing tools means the internet is now flooded with content that meets the minimum threshold of legibility. Google's algorithms have adapted accordingly, increasingly prioritising content that demonstrates real human expertise and experience — what Google now calls E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness.

Generic, formulaic content ranks poorly. Genuine expertise, presented clearly, ranks well. This is good news for businesses that actually know their subject.

### AI Search Is Changing Discovery

Google's AI Overviews, ChatGPT, and other AI-powered platforms are answering an increasing share of search queries directly, without the user ever clicking to a website. This is a structural shift in how discovery works — and it rewards businesses that have built genuine entity authority across the web.

### Core Web Vitals Are Ranking Factors

Google's page experience signals — Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint — are confirmed ranking factors. A slow, visually unstable website is now measurably disadvantaged in search rankings, not just in user experience.

## What Is Still Working

### High-Quality Long-Form Content

Despite every prediction to the contrary, well-researched long-form content continues to perform strongly. Articles and guides that genuinely and thoroughly answer the questions a target audience is asking consistently earn rankings, backlinks, and traffic.

The requirement is that the content must be genuinely better than what currently exists for the same query — more accurate, more detailed, more useful, or more clearly presented.

### Local SEO for Service Businesses

For businesses that serve a specific geographic area, local SEO remains one of the highest-ROI digital marketing activities available. A well-optimised Google Business Profile, consistent local citations, and genuine customer reviews drive meaningful, qualified local traffic.

### Technical SEO Foundations

The basics have not changed: fast loading speeds, mobile optimisation, clean URL structures, proper internal linking, and correct use of structured data markup. These are table stakes, not differentiators — but many business websites still fail them.

## What Is No Longer Working

### Keyword Stuffing

Repeating target keywords at high density damages both readability and rankings. Modern algorithms understand semantic context — write for humans, use related terms naturally, and trust that Google understands what your content is about.

### Low-Quality Backlink Building

Purchased link packages, directory spam, and guest posts on irrelevant sites carry increasing risk of penalty and diminishing ranking benefit. Quality backlinks from relevant, authoritative sources remain valuable. Quantity without quality is not.

### Thin Content

A 300-word page that technically mentions a keyword but provides no real value will not rank in a competitive market. The minimum viable content length for any page targeting a competitive keyword is typically 1,000+ words — and quality matters far more than length.

## The SEO Investment Framework for 2025

Businesses that are seeing consistent organic growth are operating on three tracks simultaneously:

**Track 1 — Technical Foundation**
Fast hosting, mobile-first design, Core Web Vitals above threshold, clean site architecture, and properly implemented schema markup. This is the infrastructure that makes everything else possible.

**Track 2 — Content Authority**
A consistent programme of high-quality content creation targeting the questions and problems that the ideal client is actively searching for. One well-researched, genuinely useful piece of content per month is more valuable than four generic posts per week.

**Track 3 — Off-Page Authority**
Building the signals that tell Google your business is a credible authority: legitimate citations in business directories, genuine client reviews, media mentions, and industry partnerships that generate natural backlinks.

## The Honest Timeline

SEO is a long-term investment. Businesses that treat it as a short-term tactic are consistently disappointed. Those that commit to 12 months of consistent, high-quality effort typically see meaningful organic traffic growth — and that traffic compounds year over year without proportional ongoing cost.

In a world where paid advertising costs continue to rise, organic search visibility is one of the most durable competitive advantages a business can build.
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
