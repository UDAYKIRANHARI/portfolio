---
name: landing-page-pro
description: >
  Build a modern, responsive marketing landing page using Next.js, React, and Tailwind CSS.
  The page must be production-quality and focused on conversion.
---

# Goal

Build a single-page marketing website (landing page) for a small business or product.
Use Next.js App Router, React, and Tailwind CSS. Prioritize clean structure,
responsiveness, accessibility, and high conversion.

# Tech Stack

- Next.js (App Router, TypeScript)
- React functional components with hooks
- Tailwind CSS for styling
- SEO-friendly metadata

# Page Structure

Always include these sections in order, unless the user explicitly asks otherwise:

1. Hero section
   - Big headline (benefit-focused)
   - Subheading explaining the offer in 1–2 lines
   - Primary call-to-action button (e.g. “Book now”, “Buy now”)
   - Optional secondary CTA (e.g. “Learn more”)
2. Features / Benefits
   - 3–6 key benefits with short, clear copy
3. Social proof
   - Testimonials, ratings, logos, or success metrics
4. Detailed section
   - Explain how the product/service works in simple steps
5. FAQ
   - 4–8 common questions with short answers
6. Final CTA
   - Repeat the main offer and CTA at the bottom of the page
7. Contact or booking
   - Simple form or clear contact info (email/phone/location) as appropriate

# Design & UX Rules

- Mobile-first layout. The page must look good on phones, tablets, and desktop.
- Use Tailwind utility classes instead of custom CSS files when possible.
- Use plenty of whitespace and consistent spacing.
- Stick to a simple, modern color palette (primary, secondary, background, accent).
- Use semantic HTML elements: <header>, <main>, <section>, <footer>, etc.
- All interactive elements must be keyboard accessible and have visible focus styles.

# Copy & Tone

- Write copy that is clear, friendly, and focused on benefits, not just features.
- Use short sentences and simple language.
- Headlines should state the main outcome or transformation for the customer.
- Avoid generic filler like “lorem ipsum” unless the user explicitly asks for placeholders.

# Implementation Details

- Create a fresh Next.js App Router project when needed.
- Organize components logically (e.g. components/Hero.tsx, components/Features.tsx, etc.).
- Extract repeated UI into separate components.
- Add basic metadata (title, description, open graph) to improve SEO.
- Ensure there are no TypeScript errors or React warnings.
- Use meaningful, consistent Tailwind class names for spacing and typography.

# When to Use This Skill

Use this skill when the user asks for:

- A marketing landing page
- A one-page website for a product, service, or small business
- A sales page or promotion page

If the user asks for a multi-page site, use this skill for the home/landing page
and then extend with additional routes as needed.