# OC Mentors Color Palette

## Modern Blue-Cyan Gradient Theme

This color palette is designed for a blue → cyan gradient logo on a dark navy background, optimized for education/mentorship branding and colorblind accessibility.

### Brand Colors (6 Colors)

1. **Primary Blue: `#2563EB`**
   - Main brand color for buttons, links, CTAs
   - Used for: Primary actions, main brand elements
   - Tailwind class: `bg-primary-blue`, `text-primary-blue`, `border-primary-blue`
   - Legacy class: `bg-primary-green` (mapped to this color)

2. **Cyan Accent: `#22D3EE`**
   - Hover states, highlights, accents
   - Used for: Hover effects, accent text, highlights
   - Tailwind class: `bg-cyan-accent`, `text-cyan-accent`, `border-cyan-accent`
   - Legacy class: `bg-accent-green` (mapped to this color)

3. **Deep Navy: `#0F172A`**
   - Primary background, navbar, footer
   - Used for: Main page backgrounds, navigation, footer
   - Tailwind class: `bg-deep-navy`
   - CSS variable: `--deep-navy`

4. **Midnight Blue: `#020617`**
   - Cards, modals, secondary sections
   - Used for: Card backgrounds, modal overlays, secondary containers
   - Tailwind class: `bg-midnight-blue`
   - CSS variable: `--midnight-blue`

5. **Soft Slate Gray: `#CBD5E1`**
   - Body text, borders, muted UI
   - Used for: Body text, secondary text, borders
   - Tailwind class: `text-soft-slate-gray`, `bg-soft-slate-gray`
   - CSS variable: `--soft-slate-gray`

6. **White: `#FFFFFF`**
   - Headings, high-contrast text
   - Used for: Headings, primary text, high contrast elements
   - Tailwind class: `text-white`, `bg-white`
   - CSS variable: `--white`

### Color Usage Guidelines

#### Buttons & CTAs
- Primary buttons: `bg-primary-blue` with `hover:bg-cyan-accent`
- Secondary buttons: `bg-white/10` with `border-primary-blue`

#### Text Colors
- Headings: `text-white`
- Body text: `text-soft-slate-gray` or `text-white/80`
- Accent text: `text-cyan-accent`
- Links: `text-primary-blue` with `hover:text-cyan-accent`

#### Backgrounds
- Main background: `#0F172A` (Deep Navy)
- Cards/sections: `bg-white/10` or `bg-midnight-blue`
- Hover states: `bg-primary-blue/10` or `bg-cyan-accent/10`

#### Borders
- Primary borders: `border-primary-blue`
- Accent borders: `border-cyan-accent`
- Subtle borders: `border-white/20`

### Accessibility

This palette is designed with colorblind accessibility in mind:
- High contrast ratios between text and backgrounds
- Blue-cyan gradient provides clear visual distinction
- Not relying solely on color for information (uses icons, text, shapes)

### Legacy Support

For backward compatibility, the old green color classes are automatically mapped:
- `primary-green` → `primary-blue` (#2563EB)
- `accent-green` → `cyan-accent` (#22D3EE)

All existing components using the old color names will automatically use the new blue-cyan palette.
