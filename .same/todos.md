# Softurix Redesign — Todos

## Design System
- [x] Fonts: Fraunces (display) + Manrope (body) in layout.tsx
- [x] Color palette: pine green + cream + gold + espresso in globals.css
- [x] Tailwind config custom colors + fonts
- [x] Install shadcn components
- [x] Customize button, input, textarea, sonner

## Data & State
- [x] Product data (13 courses)
- [x] Cart context (localStorage, add/remove/qty)

## Shared Components
- [x] Header (nav + cart drawer + count badge)
- [x] Footer
- [x] CartDrawer (sheet)
- [x] ProductCard
- [x] Logo, PageHero, AddToCart, ContactForm

## Pages
- [x] / Home
- [x] /nosotros About
- [x] /servicios Services (course grid)
- [x] /producto/[slug] Product detail
- [x] /contacto Contact form
- [x] /carrito Cart page
- [x] /checkout Checkout + confirmation

## Polish
- [x] Verify images load (19/19 return 200)
- [x] Lint clean (no errors/warnings)
- [x] All routes return 200 (home, nosotros, servicios, producto, contacto, carrito, checkout)
- [ ] Screenshot service failing to capture (env issue — server is healthy) → ask user to confirm preview
- [ ] Responsive fine-tuning after user feedback

- [ ] Review screenshots (home + flows)
- [ ] Version + deploy
