# Copying competitor services

_Started 2026-05-31 07:18 UTC_

---

## User

Our website is looking good so far but I want to more closely match https://themarketingagency.ca/? in terms of content and copy exactly the same services from that other agency

## Assistant

_[tool: list_files]_

I want to help you strengthen your site, but I should flag one thing up front: I can't copy another agency's website copy and service descriptions verbatim. That text is their copyrighted material, and reproducing it word-for-word (or making light substitutions to it) on your site would be both a legal risk for you and something I'm not able to do.

What I *can* do is help you build out a great services section with **original copy** — informed by common industry-standard service categories. Let me first look at what you've got so far.

_[tool: read_file]_

Let me explore your current site to understand its structure and existing content.

_[tool: grep]_

_[tool: grep]_

Let me look at the reference site to understand what services that agency offers, so I can help align your categories.

_[tool: web_fetch]_

I've got what I need. Quick note on what I'll do and won't do:

- ✅ I **can** align your services to match that agency's structure — they organize around four pillars (**SEO, GEO/AIO, SEM, Email**) with feature lists under each. Service names and feature labels like "Keyword Research" or "Marketing Automation" are standard industry terms, fine to mirror.
- ❌ I **won't** copy their marketing prose (blurbs, headings, paragraph copy) word-for-word — that's their copyrighted writing. I'll write original descriptions in your site's voice instead.

Let me see how services currently render before I restructure.

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I understand the structure. That agency organizes its homepage services into four pillars — **SEO, GEO/AIO, SEM, and Email** — each with a feature list. I'll restructure your services to mirror that same four-pillar layout and use the same standard feature labels, but with original blurb copy written in your site's voice (not their marketing prose).

Let me update the data.

_[tool: grep]_

_[tool: grep]_

Services data now mirrors the four-pillar structure. Let me update the nav links and footer to match, and check the default grid layout handles four cards cleanly.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Four cards look best in a 2×2 grid (3-up leaves an orphan). Let me set that default and update the nav and footer to reflect the new pillars.

_[tool: done]_

Now let me verify the homepage renders cleanly with the restructured services.

_[tool: fork_verifier_agent]_

Done. I restructured your services to mirror that agency's four-pillar layout while keeping the copy original:

- **SEO**, **GEO / AIO**, **SEM**, **Email** — now in a 2×2 grid, each with the standard feature labels (SEO Audits, LLM Optimization, Paid Search, Marketing Automation, etc.)
- Nav links and footer updated to match the four pillars
- Blurbs written fresh in your site's voice — I didn't copy their marketing prose

One note: I deliberately **didn't** copy their paragraph copy, headings, or testimonial text verbatim, since that's their copyrighted writing — mirroring it word-for-word would expose you to legal risk. The service *names* and *feature lists* are standard industry terms, so those align closely.

If you want, I can also align the **Industries** section (they list Education and Health & Wellness, which you could add) or rework the section headings — just say the word.

## User

Verifier agent check completed

## Assistant

Verifier confirmed it's all rendering correctly — four pillars in a 2×2 grid, nav and footer aligned. You're set.

## User

I want my sections to offer more closely mirror https://themarketingagency.ca/? - let me know what sections from there are missing from my page and what section is from my page. We might have to remove to make this change.

## User

I want my page sections and content to also more closely mirror https://themarketingagency.ca/? -  not in terms of exact copy but in terms of content - let me know what sections from there are missing from my page and what section is from my page. We might have to remove to make this change.

## Assistant

_[tool: read_file]_

Let me pull up the full section list of your page so I can compare it accurately against the reference.

_[tool: questions_v2]_

Good idea to map it before changing anything. Here's the side-by-side. I'm comparing the reference's homepage section order against yours.

## Sections on **both** (already aligned, just styled differently)
| Reference | Your page |
|---|---|
| Services (SEO / GEO-AIO / SEM / Email) | **Services** ✓ (just matched) |
| Our Clients (logo wall) | **Logos** |
| Industries accordion | **Industries** |
| "What Makes Us Stand Out" value props | **Why founders love us** |
| Stats bar | **Stats** |
| Testimonials | **Testimonials** |
| Results / case screenshots | **Cases** (before/after) |
| "Say Hello" + About the Founder | **Founder** |
| FAQs | **FAQ** |

## On the reference, **missing** from your page
1. **Inline lead/quote form in the hero** — their hero is built around a "Request a Quote" form with a yearly-revenue qualifier dropdown. Yours uses CTA buttons → booking.
2. **Blog feed** ("The Marketing Blog") — a row of recent posts. You have none.
3. **Newsletter / Subscribe block.**
4. **A dedicated "results proof" gallery** — screenshots of ranking/AI wins (distinct from your structured case studies).

## On **your page**, *not* on the reference (candidates to cut)
1. **How It Works** — 5-step process timeline.
2. **Why search & AI in 2026** — the explainer feature block.
3. **Playbook** section.
4. **Hero copy variants + video reel** (their hero is a form instead).

---

**My honest take before we start deleting:** your page is a stronger, more modern single-page funnel than the reference. Several of your "extra" sections (How It Works, Playbook) are genuinely good and the reference is just thinner there. I'd be cautious about removing them purely to match.

A few questions before I touch anything:

## User

Questions answered:
- approach: I'm thinking more in terms of page structure/order as well
- add_sections: Results proof gallery (ranking/AI screenshots)
- remove_sections: Remove none — keep them all
- blog_content: Skip the blog

## Assistant

_[tool: read_file]_

Got it — keep everything, reorder to mirror the reference's flow, and add a results-proof gallery. Let me look at the bottom sections to match your existing visual vocabulary before I build the new gallery and reorder.

_[tool: grep]_

Let me check the placeholder/mesh styling so the new gallery matches your existing vocabulary.

_[tool: str_replace_edit]_

Now I'll build the results-proof gallery using your existing placeholder vocabulary (the `.mesh` + monospace label pattern), with original heading copy. Let me add the component and a bit of CSS.Now add the export and the CSS for the gallery grid.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now reorder the App to mirror the reference's flow while keeping every section. Reference order is roughly: Hero → Services → Proof → Industries → Value-props → Clients → Stats → Testimonials → Say-hello/Founder → FAQ → Footer. I'll thread your extras (How It Works, Playbook) in naturally.

_[tool: done]_

Let me verify it renders cleanly with the new order and the proof gallery.

_[tool: fork_verifier_agent]_

Done. Here's what changed:

**Reordered to mirror the reference's flow** (kept all your sections):
Hero → Services → **Proof gallery** → Case Studies → Industries → Why Founders Love Us → Why Search & AI → Logos → Stats → How It Works → Playbook → Testimonials → CTA → Founder → FAQ → Footer

**Added:** a "What Sets Us Apart" proof gallery (`#proof`) — a 3-column grid of result-screenshot placeholders (organic traffic, page-one rankings, AI Overview citation, ChatGPT recommendation, revenue dashboard, backlink authority). Each is a labeled drop-zone, so you can swap in your real screenshots whenever you're ready.

**Your "extra" sections** (How It Works, Playbook, Why Search & AI) are kept and tucked into the flow — they make your page stronger than the reference, which doesn't have equivalents.

The verifier is doing a full-page pass in the background. When you have your real ranking/AI screenshots, just drop them in and I'll wire them into those tiles.

## User

Apply comment

## Assistant

The user wants the Logos section back to its original position — right below the hero. Let me move it.

_[tool: str_replace_edit]_

Moved the Logos / "Trusted by 70+ brands" band back to right below the hero. The flow is now: Hero → Logos → Services → Proof → Cases → Industries → … → Footer.

_[tool: done]_

Done — Logos is back below the hero. Trivial change with no errors, so you're all set.

## User

I want you to revisit our page flow as a home page - do the sections flow optimally or does it make sense to re-order anything and why?

## Assistant

Good question to ask — section order is where a lot of agency homepages quietly leak conversions. Let me give you my honest read of the current flow and then a recommended reorder.

## Where the current flow works
- **Hero → Logos** is textbook: hook, then instant credibility. Keep.
- **FAQ near the end** is correct — objection handling belongs late.

## Where it's working against you
1. **"Why Search & AI in 2026" sits at #9 — far too late.** That's your *problem/stakes* section ("the ground is shifting"). Its whole job is to create urgency *before* you show the solution and proof. Right now the reader sees all your proof first, then gets told why the problem matters. That's backwards.
2. **"How It Works" is buried at #11.** Process answers "*how* will you actually do this?" — a mid-funnel question that should come right after Services (what you do → how you deliver it). Sitting at the bottom, it can't reduce friction when friction is highest.
3. **Your proof is fragmented.** Results gallery (#5) and Cases (#6) come early, but Stats (#10) is stranded four sections away. Three proof elements split apart dilute each other — they hit harder clustered.
4. **The page ends on Founder → FAQ rather than the ask.** Your hard CTA (#14) fires *before* the FAQ and Founder note, so the page doesn't close on a clear call to action.

## Recommended order + why
| # | Section | Why here |
|---|---|---|
| 1 | Hero | Hook + promise |
| 2 | Logos | Instant credibility |
| 3 | **Why Search & AI** ⬆ | Set the stakes / "why now" *before* the pitch |
| 4 | Services | The solution |
| 5 | **How It Works** ⬆ | "Here's our system" — kills risk right after the offer |
| 6 | Results Gallery | ── |
| 7 | Case Studies | Proof block, |
| 8 | **Stats** ⬆ | clustered for maximum punch |
| 9 | Why Founders Love Us | Differentiation ("why us vs. other agencies") |
| 10 | Industries | Relevance / "we work with brands like you" |
| 11 | Testimonials | Voice-of-customer proof |
| 12 | Founder | Human trust — personal lead-in to the ask |
| 13 | Playbook | Soft offer (lead magnet) |
| 14 | FAQ | Handle last objections |
| 15 | **Big CTA** ⬇ | Close the page on the hard ask |
| 16 | Footer | ── |

The spine is a clean persuasion arc: **hook → credibility → why now → what → how → proof → why us → who it's for → voices → human → soft offer → objections → ask.**

Want me to apply this? It's fully reversible, so I can put it in and you can veto any individual move.

## User

It looks good but the Big CTA needs to be before FAQ with a small CTA after it

## Assistant

_[tool: str_replace_edit]_

Got it — Big CTA before the FAQ, then a smaller closing CTA after it. Let me apply the full reorder with that adjustment, and build a compact closing CTA.Now let me create the compact closing CTA component.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now the CSS for the compact CTA bar.

_[tool: str_replace_edit]_

_[tool: read_file]_

I accidentally removed a line — let me restore the proof-grid CSS and add the small CTA styling properly.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Applied. The new flow:

**Hero → Logos → Why Search & AI → Services → How It Works → Results → Cases → Stats → Why Founders Love Us → Industries → Testimonials → Founder → Playbook → Big CTA → FAQ → small CTA → Footer**

The page now sets up urgency early, clusters all your proof together, and closes with the hard CTA → FAQ → a compact "Still weighing your options?" bar to catch anyone still on the fence. Verifier's doing a full-page pass in the background; I'll flag anything it turns up.

## User

Verifier agent check completed

## Assistant

Verifier confirmed the new flow renders correctly end to end. You're all set.

