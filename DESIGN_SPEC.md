# RIN Driver Landing Page — Design System Specification

## Brand Identity & Color System

### Primary Palette (RIN Platform Standard)
All RIN applications should use this cohesive color system:

**Background & Surfaces**
- Primary BG: `#0a0e27` (slightly lighter than current #05091a for better legibility)
- Secondary BG: `#0f1535` (form cards, modals)
- Tertiary BG: `#151d45` (hover states, nested containers)
- Border: `#1f2d52` (UI dividers, input borders)

**Text & Typography**
- Primary Text: `#f5f7fb` (slightly warmer than current #f0f4ff)
- Secondary Text: `#9ca3b3` (labels, hints — improved contrast from #9aabc8)
- Tertiary Text: `#6b7590` (disabled, timestamps — from #5a7090)

**Semantic Colors (Brand Actions)**
- Primary Action (CTA): `#2563eb` (vibrant blue, replaces red #e94560)
- Success: `#10b981` (replaces green #34d399 for better contrast)
- Warning/Error: `#dc2626` (replaces #e94560, more official)
- Accent/Gold: `#f59e0b` (replaces #fbbf24, darker, more professional)

**Accents & Visual Cues**
- Red (system error/destruction): `#ef4444`
- Green (success/confirm): `#34d399`
- Blue (info/secondary): `#3b82f6`
- Gold (highlight/special): `#f59e0b`

---

## Typography System

### Font Stack
**Primary Font:** Inter (already in use — GOOD)
- Weights: 300, 400, 500, 600, 700, 800, 900

### Type Scale & Usage

| Element | Size | Weight | Line Height | Letter Spacing | Use Case |
|---------|------|--------|-------------|----------------|----------|
| Display (H1) | clamp(40px, 5vw, 64px) | 900 | 1.0 | -1px | Hero headline |
| Headline (H2) | 28px | 800 | 1.1 | -0.5px | Section title |
| Subheading (H3) | 20px | 700 | 1.2 | -0.3px | Card title, modal title |
| Body Large | 16px | 400 | 1.6 | 0 | Form labels, main copy |
| Body Normal | 14px | 400 | 1.6 | 0 | Secondary copy |
| Body Small | 13px | 500 | 1.5 | 0 | Helper text, captions |
| Label | 11px | 700 | 1.4 | 0.08em | Form field labels |

---

## Component Design Patterns

### Buttons
- **Primary CTA:** Blue (#2563eb) bg, white text, rounded-lg (12px)
- **Secondary:** Transparent bg, blue border, blue text, rounded-lg
- **Tertiary/Ghost:** No bg, blue text, underline on hover
- **Disabled:** 40% opacity, not-allowed cursor
- **Min height:** 44px (touch-friendly)
- **Padding:** 14px 20px (comfortable spacing)
- **State transitions:** 150ms smooth color change
- **Focus state:** 2px blue outline, 2px offset

### Form Inputs
- **Background:** #151d45 (tertiary bg)
- **Border:** 1.5px solid #1f2d52 (border)
- **Border on focus:** 2px solid #2563eb (primary blue)
- **Text color:** #f5f7fb (primary text)
- **Placeholder:** #6b7590 (tertiary text)
- **Padding:** 14px 16px (height ≥44px)
- **Border-radius:** 10px
- **Font size:** 15px

### Cards & Containers
- **Background:** #0f1535 (secondary bg) with glassmorphism
- **Border:** 1px solid #1f2d52
- **Border-radius:** 16px (more modern, less 14px)
- **Padding:** 24px (increased from 20px for breathing room)
- **Shadow:** 0 24px 80px rgba(0,0,0,0.4) (soften from 0.5)
- **Backdrop filter:** blur(16px)
- **Hover:** border color to #2d4170 (lighter border)

### Feature Cards (4-grid)
- **Background:** rgba(255,255,255,0.02)
- **Border:** 1px solid #1f2d52
- **Border-radius:** 14px
- **Padding:** 18px 20px (slightly increased)
- **Icon container:** 40px × 40px, rounded-lg (from 8px)
- **Icon background colors:**
  - Green: rgba(16,185,129,0.1)
  - Blue: rgba(37,99,235,0.1)
  - Red: rgba(239,68,68,0.1)
  - Amber: rgba(245,158,11,0.1)
- **Font sizes:** Title 12px bold, Desc 13px normal
- **Spacing:** 10px gap between cards

### Modals & Overlays
- **Overlay:** rgba(0,0,0,0.85)
- **Modal bg:** #0f1535
- **Modal border:** 1px solid #1f2d52
- **Border-radius:** 20px 20px 0 0 (bottom sheet on mobile)
- **Max height:** 78vh
- **Close affordance:** Handle indicator at top (3px × 40px bar)

---

## Layout & Spacing System

### Spacing Scale (8px increments)
```
xs: 4px   (tight)
sm: 8px   (compact)
md: 12px  (normal)
lg: 16px  (comfortable)
xl: 20px  (spacious)
2xl: 24px (breathing)
3xl: 32px (generous)
```

### Page Layout
- **Max width:** 1160px (increased from 1120px)
- **Container padding:** 40px desktop, 20px mobile
- **Header height:** 60px (sticky, z-index 200)
- **Page grid:** 1fr 440px on desktop (increased form col from 420px)
- **Grid gap:** 0
- **Left copy padding:** 60px right, 0 bottom (maintained)
- **Form column padding:** 40px vertical

### Responsive Breakpoints
- **Mobile:** max-width: 640px
- **Tablet:** max-width: 1024px
- **Desktop:** 1025px+
- **Large desktop:** 1440px+

---

## Visual Hierarchy & Emphasis

### Primary CTA (Apply to Drive Button)
- **Color:** #2563eb (blue, not red)
- **Size:** 16px, 800 weight
- **State:** Normal → Hover (opacity 0.88) → Active (scale 0.98)
- **Icon:** Inline arrow → (not needed)

### Secondary Information
- **Text color:** #9ca3b3 (secondary text)
- **Font size:** 13px normal weight
- **Example:** "30 seconds to apply" subtitle

### Error / Warning States
- **Background:** rgba(239,68,68,0.08)
- **Border:** 1px solid rgba(239,68,68,0.25)
- **Text:** #fca5a5 (lighter red)
- **Icon:** 🔴 or ⚠️

### Success States
- **Background:** rgba(16,185,129,0.08)
- **Border:** 1px solid rgba(16,185,129,0.25)
- **Text:** #86efac (light green)
- **Icon:** ✓ or 🎉

---

## Animation & Micro-interactions

### Timing Standards
- **Micro-interactions (tap feedback):** 150ms
- **Page transitions:** 300ms
- **State changes:** 200ms
- **Loading indicators:** Infinite spin at 2s

### Easing Functions
- **Entrance:** ease-out (fast start, slow end)
- **Exit:** ease-in (slow start, fast end)
- **Interactive:** cubic-bezier(0.4, 0, 0.2, 1) (Material standard)

### Specific Animations
- **Button press:** 150ms scale(0.98)
- **Input focus:** 200ms border-color change + 100ms shadow-blur increase
- **Card hover:** 200ms border-color change (only, no transform)
- **Fade in (page load):** 700ms from opacity 0
- **Form submit loading:** button text change + spinner (use loading state)

---

## Accessibility Requirements

### Color Contrast
- **All text:** Minimum 4.5:1 contrast ratio (AA standard)
- **Large text (18px+):** Minimum 3:1 ratio
- **UI components:** Test form inputs, buttons, and labels with contrast checker

### Interactive Elements
- **Touch target size:** Minimum 44px × 44px (already met)
- **Focus indicators:** 2px solid outline, 2px offset, visible on all elements
- **Focus order:** Tab through form top-to-bottom
- **Keyboard support:** Enter to submit, Arrow keys for select fields

### Form Accessibility
- **Labels:** Visible always, associated with `<label for>` 
- **Required indicators:** Asterisk or bold word "required"
- **Error placement:** Below field, not just at form top
- **Helper text:** Visible below inputs, explain constraints

### Motion & Animation
- **Respect prefers-reduced-motion:** Disable animations for users with this preference
- **No auto-playing media:** Only explicit play triggers
- **Loading states:** Always provide feedback within 300ms

---

## Design System Implementation Checklist

- [ ] Update CSS variables in `:root` with new color palette
- [ ] Change primary CTA color from red (#e94560) to blue (#2563eb)
- [ ] Adjust background tones: #0a0e27 (primary), #0f1535 (secondary), #151d45 (tertiary)
- [ ] Increase container padding and card padding (24px)
- [ ] Update form input styling: 14px padding, 15px font, 44px min-height
- [ ] Apply new border-radius scale: 10px inputs, 12px buttons, 16px cards
- [ ] Verify all text meets 4.5:1 contrast ratio
- [ ] Test focus states on all interactive elements
- [ ] Update error/success colors and background tints
- [ ] Add backdrop-filter blur to all overlays
- [ ] Update hover state transitions: border-color (no transform)
- [ ] Set form grid gap to 12px
- [ ] Verify responsive layout at 640px, 1024px, 1440px
- [ ] Test on touch devices: all targets ≥44px, spacing ≥8px
- [ ] Update icon background colors to new semantic palette
- [ ] Ensure modals have clear dismiss affordance

---

## Brand Alignment Notes

1. **Blue over Red:** The RIN platform uses blue as the primary action color. Red is reserved for errors/warnings.
2. **Professional Typography:** Using established weight hierarchy (900 for headlines, 700 for subheadings, 400 for body).
3. **Glassmorphism:** Cards and overlays use subtle backdrop blur and transparency for depth.
4. **Consistent Spacing:** 8px increments throughout for predictable, cohesive layout.
5. **Dark Modern Aesthetic:** Maintains the dark theme but with improved contrast and legibility.

---

## Files to Update
1. `/Users/b.lamoutlook.com/Downloads/rin-driver-landing/index.html` — Update CSS variables and component styles
2. Test in browser: desktop (1440px), tablet (768px), mobile (375px)
3. Verify OTP flow still works after styling changes

---

## Next Steps
Once approved, I will:
1. Update all CSS color variables
2. Adjust padding/margin scales
3. Refine border-radius and shadow values
4. Test all interactive states
5. Verify accessibility compliance
6. Deploy to production
