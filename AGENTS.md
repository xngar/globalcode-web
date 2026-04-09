<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


name: form-cro
description: Optimize any form that is NOT signup or account registration — including lead capture, contact, demo request, application, survey, quote, and checkout forms.
risk: unknown
date_added: '2026-02-27'
You are an expert in **form optimization and friction reduction**.
Your goal is to **maximize form completion while preserving data usefulness**.

You do **not** blindly reduce fields.
You do **not** optimize forms in isolation from their business purpose.
You do **not** assume more data equals better leads.

Before giving recommendations, calculate the **Form Health & Friction Index**.

This index answers:

> **Is this form structurally capable of converting well?**

It prevents:

* premature redesigns
* gut-feel field removal
* optimization without measurement
* “just make it shorter” mistakes

### Total Score: **0–100**
This is a **diagnostic score**, not a KPI.

### Scoring Categories & Weights
| Category                     | Weight  |
| ---------------------------- | ------- |
| Field Necessity & Efficiency | 30      |
| Value–Effort Balance         | 20      |
| Cognitive Load & Clarity     | 20      |
| Error Handling & Recovery    | 15      |
| Trust & Friction Reduction   | 10      |
| Mobile Usability             | 5       |
| **Total**                    | **100** |

### Category Definitions
#### 1. Field Necessity & Efficiency (0–30)

* Every required field is justified
* No unused or “nice-to-have” fields
* No duplicated or inferable data

#### 2. Value–Effort Balance (0–20)

* Clear value proposition before the form
* Effort required matches perceived reward
* Commitment level fits traffic intent

#### 3. Cognitive Load & Clarity (0–20)

* Clear labels and instructions
* Logical field order
* Minimal decision fatigue

#### 4. Error Handling & Recovery (0–15)

* Inline validation
* Helpful error messages
* No data loss on errors

#### 5. Trust & Friction Reduction (0–10)

* Privacy reassurance
* Objection handling
* Social proof where appropriate

#### 6. Mobile Usability (0–5)

* Touch-friendly
* Proper keyboards
* No horizontal scrolling or cramped fields

### Health Bands (Required)
| Score  | Verdict                  | Interpretation                   |
| ------ | ------------------------ | -------------------------------- |
| 85–100 | **High-Performing**      | Optimize incrementally           |
| 70–84  | **Usable with Friction** | Clear optimization opportunities |
| 55–69  | **Conversion-Limited**   | Structural issues present        |
| <55    | **Broken**               | Redesign before testing          |

If verdict is **Broken**, stop and recommend structural fixes first.

### 1. Form Type
* Lead capture
* Contact
* Demo / sales request
* Application
* Survey / feedback
* Quote / estimate
* Checkout (non-account)

### 2. Business Context
* What happens after submission?
* Which fields are actually used?
* What qualifies as a “good” submission?
* Any legal or compliance constraints?

### 3. Current Performance
* Completion rate
* Field-level drop-off (if available)
* Mobile vs desktop split
* Known abandonment points

### 1. Every Field Has a Cost
Each required field reduces completion.

Rule of thumb:

* 3 fields → baseline
* 4–6 fields → −10–25%
* 7+ fields → −25–50%+

Fields must **earn their place**.

### 2. Data Collection ≠ Data Usage
If a field is:

* not used
* not acted upon
* not required legally

→ it is friction, not value.

### 3. Reduce Cognitive Load First
People abandon forms more from **thinking** than typing.

### Email
* Single field (no confirmation)
* Inline validation
* Typo correction
* Correct mobile keyboard

### Name
* Single “Name” field by default
* Split only if operationally required

### Phone
* Optional unless critical
* Explain why if required
* Auto-format and support country codes

### Company / Organization
* Auto-suggest when possible
* Infer from email domain
* Enrich after submission if feasible

### Job Title / Role
* Dropdown if segmentation matters
* Optional by default

### Free-Text Fields
* Optional unless essential
* Clear guidance on length/purpose
* Expand on focus

### Selects & Checkboxes
* Radio buttons if <5 options
* Searchable selects if long
* Clear “Other” handling

### Field Order
1. Easiest first (email, name)
2. Commitment-building fields
3. Sensitive or high-effort fields last

### Labels & Placeholders
* Labels must always be visible
* Placeholders are examples only
* Avoid label-as-placeholder anti-pattern

### Single vs Multi-Column
* Default to single column
* Multi-column only for closely related fields

### Use When
* 6+ fields
* Distinct logical sections
* Qualification or routing required

### Best Practices
* Progress indicator
* Back navigation
* Save progress
* One topic per step

### Inline Validation
* After field interaction, not keystroke
* Clear visual feedback
* Do not clear input on error

### Error Messaging
* Specific
* Human
* Actionable

Bad: “Invalid input”
Good: “Please enter a valid email ([name@company.com](mailto:name@company.com))”

### Copy
Avoid: Submit, Send
Prefer: Action + Outcome

Examples:

* “Get My Quote”
* “Request Demo”
* “Download the Guide”

### States
* Disabled + loading on submit
* Clear success message
* Next-step expectations

## Trust & Friction Reduction
* Privacy reassurance near submit
* Expected response time
* Testimonials (when appropriate)
* Security badges only if relevant

## Mobile Optimization (Mandatory)
* ≥44px touch targets
* Correct keyboard types
* Autofill support
* Single column
* Sticky submit button (where helpful)

### Key Metrics
* Form view → start
* Start → completion
* Field-level drop-off
* Error rate by field
* Time to complete
* Device split

### Track:
* First field focus
* Field completion
* Validation errors
* Submit attempts
* Successful submissions

### Form Health Summary
* Form Health & Friction Index score
* Primary bottlenecks
* Structural vs tactical issues

### Form Audit
For each issue:

* **Issue**
* **Impact**
* **Fix**
* **Priority**

### Recommended Form Design
* Required fields (with justification)
* Optional fields
* Field order
* Copy (labels, help text, CTA)
* Error messages
* Layout notes

### Test Hypotheses
Clearly stated A/B test ideas with expected outcome

## Experiment Boundaries
Do **not** test:

* legal requirements
* core qualification fields without alignment
* multiple variables at once

## Questions to Ask (If Needed)
1. What is the current completion rate?
2. Which fields are actually used?
3. Do you have field-level analytics?
4. What happens after submission?
5. Are there compliance constraints?
6. Mobile vs desktop traffic split?

## Related Skills
* **signup-flow-cro** – Account creation forms
* **popup-cro** – Forms in modals
* **page-cro** – Page-level optimization
* **analytics-tracking** – Measuring form performance
* **ab-test-setup** – Testing form changes

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.




name: nextjs-best-practices
description: "Next.js App Router principles. Server Components, data fetching, routing patterns."
risk: unknown
date_added: "2026-02-27"
# Next.js Best Practices

> Principles for Next.js App Router development.

## 1. Server vs Client Components

### Decision Tree

```
Does it need...?
│
├── useState, useEffect, event handlers
│   └── Client Component ('use client')
│
├── Direct data fetching, no interactivity
│   └── Server Component (default)
│
└── Both? 
    └── Split: Server parent + Client child
```

### By Default

| Type | Use |
|------|-----|
| **Server** | Data fetching, layout, static content |
| **Client** | Forms, buttons, interactive UI |

## 2. Data Fetching Patterns

### Fetch Strategy

| Pattern | Use |
|---------|-----|
| **Default** | Static (cached at build) |
| **Revalidate** | ISR (time-based refresh) |
| **No-store** | Dynamic (every request) |

### Data Flow

| Source | Pattern |
|--------|---------|
| Database | Server Component fetch |
| API | fetch with caching |
| User input | Client state + server action |

## 3. Routing Principles

### File Conventions

| File | Purpose |
|------|---------|
| `page.tsx` | Route UI |
| `layout.tsx` | Shared layout |
| `loading.tsx` | Loading state |
| `error.tsx` | Error boundary |
| `not-found.tsx` | 404 page |

### Route Organization

| Pattern | Use |
|---------|-----|
| Route groups `(name)` | Organize without URL |
| Parallel routes `@slot` | Multiple same-level pages |
| Intercepting `(.)` | Modal overlays |

## 4. API Routes

### Route Handlers

| Method | Use |
|--------|-----|
| GET | Read data |
| POST | Create data |
| PUT/PATCH | Update data |
| DELETE | Remove data |

### Best Practices

- Validate input with Zod
- Return proper status codes
- Handle errors gracefully
- Use Edge runtime when possible

## 5. Performance Principles

### Image Optimization

- Use next/image component
- Set priority for above-fold
- Provide blur placeholder
- Use responsive sizes

### Bundle Optimization

- Dynamic imports for heavy components
- Route-based code splitting (automatic)
- Analyze with bundle analyzer

## 6. Metadata

### Static vs Dynamic

| Type | Use |
|------|-----|
| Static export | Fixed metadata |
| generateMetadata | Dynamic per-route |

### Essential Tags

- title (50-60 chars)
- description (150-160 chars)
- Open Graph images
- Canonical URL

## 7. Caching Strategy

### Cache Layers

| Layer | Control |
|-------|---------|
| Request | fetch options |
| Data | revalidate/tags |
| Full route | route config |

### Revalidation

| Method | Use |
|--------|-----|
| Time-based | `revalidate: 60` |
| On-demand | `revalidatePath/Tag` |
| No cache | `no-store` |

## 8. Server Actions

### Use Cases

- Form submissions
- Data mutations
- Revalidation triggers

### Best Practices

- Mark with 'use server'
- Validate all inputs
- Return typed responses
- Handle errors

## 9. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| 'use client' everywhere | Server by default |
| Fetch in client components | Fetch in server |
| Skip loading states | Use loading.tsx |
| Ignore error boundaries | Use error.tsx |
| Large client bundles | Dynamic imports |

## 10. Project Structure

```
app/
├── (marketing)/     # Route group
│   └── page.tsx
├── (dashboard)/
│   ├── layout.tsx   # Dashboard layout
│   └── page.tsx
├── api/
│   └── [resource]/
│       └── route.ts
└── components/
    └── ui/
```

> **Remember:** Server Components are the default for a reason. Start there, add client only when needed.

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.





name: react-patterns
description: "Modern React patterns and principles. Hooks, composition, performance, TypeScript best practices."
risk: safe
date_added: "2026-02-27"
# React Patterns

> Principles for building production-ready React applications.

## 1. Component Design Principles

### Component Types

| Type | Use | State |
|------|-----|-------|
| **Server** | Data fetching, static | None |
| **Client** | Interactivity | useState, effects |
| **Presentational** | UI display | Props only |
| **Container** | Logic/state | Heavy state |

### Design Rules

- One responsibility per component
- Props down, events up
- Composition over inheritance
- Prefer small, focused components

## 2. Hook Patterns

### When to Extract Hooks

| Pattern | Extract When |
|---------|-------------|
| **useLocalStorage** | Same storage logic needed |
| **useDebounce** | Multiple debounced values |
| **useFetch** | Repeated fetch patterns |
| **useForm** | Complex form state |

### Hook Rules

- Hooks at top level only
- Same order every render
- Custom hooks start with "use"
- Clean up effects on unmount

## 3. State Management Selection

| Complexity | Solution |
|------------|----------|
| Simple | useState, useReducer |
| Shared local | Context |
| Server state | React Query, SWR |
| Complex global | Zustand, Redux Toolkit |

### State Placement

| Scope | Where |
|-------|-------|
| Single component | useState |
| Parent-child | Lift state up |
| Subtree | Context |
| App-wide | Global store |

## 4. React 19 Patterns

### New Hooks

| Hook | Purpose |
|------|---------|
| **useActionState** | Form submission state |
| **useOptimistic** | Optimistic UI updates |
| **use** | Read resources in render |

### Compiler Benefits

- Automatic memoization
- Less manual useMemo/useCallback
- Focus on pure components

## 5. Composition Patterns

### Compound Components

- Parent provides context
- Children consume context
- Flexible slot-based composition
- Example: Tabs, Accordion, Dropdown

### Render Props vs Hooks

| Use Case | Prefer |
|----------|--------|
| Reusable logic | Custom hook |
| Render flexibility | Render props |
| Cross-cutting | Higher-order component |

## 6. Performance Principles

### When to Optimize

| Signal | Action |
|--------|--------|
| Slow renders | Profile first |
| Large lists | Virtualize |
| Expensive calc | useMemo |
| Stable callbacks | useCallback |

### Optimization Order

1. Check if actually slow
2. Profile with DevTools
3. Identify bottleneck
4. Apply targeted fix

## 7. Error Handling

### Error Boundary Usage

| Scope | Placement |
|-------|-----------|
| App-wide | Root level |
| Feature | Route/feature level |
| Component | Around risky component |

### Error Recovery

- Show fallback UI
- Log error
- Offer retry option
- Preserve user data

## 8. TypeScript Patterns

### Props Typing

| Pattern | Use |
|---------|-----|
| Interface | Component props |
| Type | Unions, complex |
| Generic | Reusable components |

### Common Types

| Need | Type |
|------|------|
| Children | ReactNode |
| Event handler | MouseEventHandler |
| Ref | RefObject<Element> |

## 9. Testing Principles

| Level | Focus |
|-------|-------|
| Unit | Pure functions, hooks |
| Integration | Component behavior |
| E2E | User flows |

### Test Priorities

- User-visible behavior
- Edge cases
- Error states
- Accessibility

## 10. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Prop drilling deep | Use context |
| Giant components | Split smaller |
| useEffect for everything | Server components |
| Premature optimization | Profile first |
| Index as key | Stable unique ID |

> **Remember:** React is about composition. Build small, combine thoughtfully.

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.





name: tailwind-patterns
description: "Tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture."
risk: unknown
date_added: "2026-02-27"
> Modern utility-first CSS with CSS-native configuration.

Use this skill when configuring Tailwind v4, using CSS-first theme and design tokens, or implementing container queries and modern Tailwind patterns.

### What Changed from v3
| v3 (Legacy) | v4 (Current) |
|-------------|--------------|
| `tailwind.config.js` | CSS-based `@theme` directive |
| PostCSS plugin | Oxide engine (10x faster) |
| JIT mode | Native, always-on |
| Plugin system | CSS-native features |
| `@apply` directive | Still works, discouraged |

### v4 Core Concepts
| Concept | Description |
|---------|-------------|
| **CSS-first** | Configuration in CSS, not JavaScript |
| **Oxide Engine** | Rust-based compiler, much faster |
| **Native Nesting** | CSS nesting without PostCSS |
| **CSS Variables** | All tokens exposed as `--*` vars |

### Theme Definition
```
@theme {
  /* Colors - use semantic names */
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
  --color-surface-dark: oklch(0.15 0 0);
  
  /* Spacing scale */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### When to Extend vs Override
| Action | Use When |
|--------|----------|
| **Extend** | Adding new values alongside defaults |
| **Override** | Replacing default scale entirely |
| **Semantic tokens** | Project-specific naming (primary, surface) |

### Breakpoint vs Container
| Type | Responds To |
|------|-------------|
| **Breakpoint** (`md:`) | Viewport width |
| **Container** (`@container`) | Parent element width |

### Container Query Usage
| Pattern | Classes |
|---------|---------|
| Define container | `@container` on parent |
| Container breakpoint | `@sm:`, `@md:`, `@lg:` on children |
| Named containers | `@container/card` for specificity |

### When to Use
| Scenario | Use |
|----------|-----|
| Page-level layouts | Viewport breakpoints |
| Component-level responsive | Container queries |
| Reusable components | Container queries (context-independent) |

### Breakpoint System
| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile-first base |
| `sm:` | 640px | Large phone / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop |

### Mobile-First Principle
1. Write mobile styles first (no prefix)
2. Add larger screen overrides with prefixes
3. Example: `w-full md:w-1/2 lg:w-1/3`

### Configuration Strategies
| Method | Behavior | Use When |
|--------|----------|----------|
| `class` | `.dark` class toggles | Manual theme switcher |
| `media` | Follows system preference | No user control |
| `selector` | Custom selector (v4) | Complex theming |

### Dark Mode Pattern
| Element | Light | Dark |
|---------|-------|------|
| Background | `bg-white` | `dark:bg-zinc-900` |
| Text | `text-zinc-900` | `dark:text-zinc-100` |
| Borders | `border-zinc-200` | `dark:border-zinc-700` |

### Flexbox Patterns
| Pattern | Classes |
|---------|---------|
| Center (both axes) | `flex items-center justify-center` |
| Vertical stack | `flex flex-col gap-4` |
| Horizontal row | `flex gap-4` |
| Space between | `flex justify-between items-center` |
| Wrap grid | `flex flex-wrap gap-4` |

### Grid Patterns
| Pattern | Classes |
|---------|---------|
| Auto-fit responsive | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |
| Asymmetric (Bento) | `grid grid-cols-3 grid-rows-2` with spans |
| Sidebar layout | `grid grid-cols-[auto_1fr]` |

> **Note:** Prefer asymmetric/Bento layouts over symmetric 3-column grids.

### OKLCH vs RGB/HSL
| Format | Advantage |
|--------|-----------|
| **OKLCH** | Perceptually uniform, better for design |
| **HSL** | Intuitive hue/saturation |
| **RGB** | Legacy compatibility |

### Color Token Architecture
| Layer | Example | Purpose |
|-------|---------|---------|
| **Primitive** | `--blue-500` | Raw color values |
| **Semantic** | `--color-primary` | Purpose-based naming |
| **Component** | `--button-bg` | Component-specific |

### Font Stack Pattern
| Type | Recommended |
|------|-------------|
| Sans | `'Inter', 'SF Pro', system-ui, sans-serif` |
| Mono | `'JetBrains Mono', 'Fira Code', monospace` |
| Display | `'Outfit', 'Poppins', sans-serif` |

### Type Scale
| Class | Size | Use |
|-------|------|-----|
| `text-xs` | 0.75rem | Labels, captions |
| `text-sm` | 0.875rem | Secondary text |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Lead text |
| `text-xl`+ | 1.25rem+ | Headings |

### Built-in Animations
| Class | Effect |
|-------|--------|
| `animate-spin` | Continuous rotation |
| `animate-ping` | Attention pulse |
| `animate-pulse` | Subtle opacity pulse |
| `animate-bounce` | Bouncing effect |

### Transition Patterns
| Pattern | Classes |
|---------|---------|
| All properties | `transition-all duration-200` |
| Specific | `transition-colors duration-150` |
| With easing | `ease-out` or `ease-in-out` |
| Hover effect | `hover:scale-105 transition-transform` |

### When to Extract
| Signal | Action |
|--------|--------|
| Same class combo 3+ times | Extract component |
| Complex state variants | Extract component |
| Design system element | Extract + document |

### Extraction Methods
| Method | Use When |
|--------|----------|
| **React/Vue component** | Dynamic, JS needed |
| **@apply in CSS** | Static, no JS needed |
| **Design tokens** | Reusable values |

## 11. Anti-Patterns
| Don't | Do |
|-------|-----|
| Arbitrary values everywhere | Use design system scale |
| `!important` | Fix specificity properly |
| Inline `style=` | Use utilities |
| Duplicate long class lists | Extract component |
| Mix v3 config with v4 | Migrate fully to CSS-first |
| Use `@apply` heavily | Prefer components |

## 12. Performance Principles
| Principle | Implementation |
|-----------|----------------|
| **Purge unused** | Automatic in v4 |
| **Avoid dynamism** | No template string classes |
| **Use Oxide** | Default in v4, 10x faster |
| **Cache builds** | CI/CD caching |

> **Remember:** Tailwind v4 is CSS-first. Embrace CSS variables, container queries, and native features. The config file is now optional.




name: frontend-design
description: "You are a frontend designer-engineer, not a layout generator."
risk: unknown
date_added: "2026-02-27"
You are a **frontend designer-engineer**, not a layout generator.

Your goal is to create **memorable, high-craft interfaces** that:

* Avoid generic “AI UI” patterns
* Express a clear aesthetic point of view
* Are fully functional and production-ready
* Translate design intent directly into code

This skill prioritizes **intentional design systems**, not default frameworks.

## 1. Core Design Mandate
Every output must satisfy **all four**:

1. **Intentional Aesthetic Direction**
   A named, explicit design stance (e.g. *editorial brutalism*, *luxury minimal*, *retro-futurist*, *industrial utilitarian*).

2. **Technical Correctness**
   Real, working HTML/CSS/JS or framework code — not mockups.

3. **Visual Memorability**
   At least one element the user will remember 24 hours later.

4. **Cohesive Restraint**
   No random decoration. Every flourish must serve the aesthetic thesis.

❌ No default layouts
❌ No design-by-components
❌ No “safe” palettes or fonts
✅ Strong opinions, well executed

## 2. Design Feasibility & Impact Index (DFII)
Before building, evaluate the design direction using DFII.

### DFII Dimensions (1–5)
| Dimension                      | Question                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| **Aesthetic Impact**           | How visually distinctive and memorable is this direction?    |
| **Context Fit**                | Does this aesthetic suit the product, audience, and purpose? |
| **Implementation Feasibility** | Can this be built cleanly with available tech?               |
| **Performance Safety**         | Will it remain fast and accessible?                          |
| **Consistency Risk**           | Can this be maintained across screens/components?            |

### Scoring Formula
```
DFII = (Impact + Fit + Feasibility + Performance) − Consistency Risk
```

**Range:** `-5 → +15`

### Interpretation
| DFII      | Meaning   | Action                      |
| --------- | --------- | --------------------------- |
| **12–15** | Excellent | Execute fully               |
| **8–11**  | Strong    | Proceed with discipline     |
| **4–7**   | Risky     | Reduce scope or effects     |
| **≤ 3**   | Weak      | Rethink aesthetic direction |

Before writing code, explicitly define:

### 1. Purpose
* What action should this interface enable?
* Is it persuasive, functional, exploratory, or expressive?

### 2. Tone (Choose One Dominant Direction)
Examples (non-exhaustive):

* Brutalist / Raw
* Editorial / Magazine
* Luxury / Refined
* Retro-futuristic
* Industrial / Utilitarian
* Organic / Natural
* Playful / Toy-like
* Maximalist / Chaotic
* Minimalist / Severe

⚠️ Do not blend more than **two**.

### 3. Differentiation Anchor
Answer:

> “If this were screenshotted with the logo removed, how would someone recognize it?”

This anchor must be visible in the final UI.

### Typography
* Avoid system fonts and AI-defaults (Inter, Roboto, Arial, etc.)
* Choose:

  * 1 expressive display font
  * 1 restrained body font
* Use typography structurally (scale, rhythm, contrast)

### Color & Theme
* Commit to a **dominant color story**
* Use CSS variables exclusively
* Prefer:

  * One dominant tone
  * One accent
  * One neutral system
* Avoid evenly-balanced palettes

### Spatial Composition
* Break the grid intentionally
* Use:

  * Asymmetry
  * Overlap
  * Negative space OR controlled density
* White space is a design element, not absence

### Motion
* Motion must be:

  * Purposeful
  * Sparse
  * High-impact
* Prefer:

  * One strong entrance sequence
  * A few meaningful hover states
* Avoid decorative micro-motion spam

### Texture & Depth
Use when appropriate:

* Noise / grain overlays
* Gradient meshes
* Layered translucency
* Custom borders or dividers
* Shadows with narrative intent (not defaults)

### Code Requirements
* Clean, readable, and modular
* No dead styles
* No unused animations
* Semantic HTML
* Accessible by default (contrast, focus, keyboard)

### Framework Guidance
* **HTML/CSS**: Prefer native features, modern CSS
* **React**: Functional components, composable styles
* **Animation**:

  * CSS-first
  * Framer Motion only when justified

### Complexity Matching
* Maximalist design → complex code (animations, layers)
* Minimalist design → extremely precise spacing & type

Mismatch = failure.

When generating frontend work:

### 1. Design Direction Summary
* Aesthetic name
* DFII score
* Key inspiration (conceptual, not visual plagiarism)

### 2. Design System Snapshot
* Fonts (with rationale)
* Color variables
* Spacing rhythm
* Motion philosophy

### 3. Implementation
* Full working code
* Comments only where intent isn’t obvious

### 4. Differentiation Callout
Explicitly state:

> “This avoids generic UI by doing X instead of Y.”

## 7. Anti-Patterns (Immediate Failure)
❌ Inter/Roboto/system fonts
❌ Purple-on-white SaaS gradients
❌ Default Tailwind/ShadCN layouts
❌ Symmetrical, predictable sections
❌ Overused AI design tropes
❌ Decoration without intent

If the design could be mistaken for a template → restart.

## 8. Integration With Other Skills
* **page-cro** → Layout hierarchy & conversion flow
* **copywriting** → Typography & message rhythm
* **marketing-psychology** → Visual persuasion & bias alignment
* **branding** → Visual identity consistency
* **ab-test-setup** → Variant-safe design systems

## 9. Operator Checklist
Before finalizing output:

* [ ] Clear aesthetic direction stated
* [ ] DFII ≥ 8
* [ ] One memorable design anchor
* [ ] No generic fonts/colors/layouts
* [ ] Code matches design ambition
* [ ] Accessible and performant

## 10. Questions to Ask (If Needed)
1. Who is this for, emotionally?
2. Should this feel trustworthy, exciting, calm, or provocative?
3. Is memorability or clarity more important?
4. Will this scale to other pages/components?
5. What should users *feel* in the first 3 seconds?

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.


