# 🎨 Design & Visual System

## Design Philosophy

This website captures Marin Kitagawa's essence through a modern anime-inspired aesthetic combined with premium web design. The visual language emphasizes:

- **Confidence**: Bold gradients and vibrant colors
- **Creativity**: Interactive elements and smooth animations
- **Warmth**: Soft glows and approachable interface
- **Polish**: Professional quality with anime charm

---

## Color Palette

### Primary Colors
| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| **Pink** | #ec4899 | Character signature, CTAs, accents | `pink-500` |
| **Purple** | #a855f7 | Complementary, secondary accents | `purple-500` |
| **White** | #ffffff | Text, highlights | `white` |

### Background Colors
| Color | Hex | Usage | Tailwind |
|-------|-----|-------|----------|
| **Dark Slate** | #0f172a | Primary background | `slate-900` |
| **Slate 800** | #1e293b | Cards, components | `slate-800` |
| **Slate 700** | #334155 | Borders, separators | `slate-700` |

### Semantic Colors
```css
.text-gradient     /* Pink → Purple → Pink gradient text */
.border-pink-400   /* Subtle pink borders */
.bg-slate-900      /* Dark backgrounds */
.from-pink-500     /* Gradient starts */
.to-purple-500     /* Gradient ends */
```

---

## Typography

### Font Stack
```css
font-family: system-ui, -apple-system, sans-serif;
```

### Size Hierarchy
| Level | Size | Usage | Tailwind |
|-------|------|-------|----------|
| **H1** | 3.75rem | Main page title | `text-6xl font-black` |
| **H2** | 2.25rem | Section headers | `text-4xl font-bold` |
| **H3** | 1.875rem | Card titles | `text-3xl font-bold` |
| **Body** | 1rem | Main text | `text-base` |
| **Small** | 0.875rem | Captions | `text-sm` |
| **Tiny** | 0.75rem | Meta info | `text-xs` |

### Font Weights
- **Black** (900): Main headlines
- **Bold** (700): Section titles, CTA buttons
- **Semibold** (600): Card headers, emphasis
- **Normal** (400): Body text

---

## Spacing System

```
Base unit: 0.25rem (4px)

Spacing scale:
2   = 0.5rem   (8px)
3   = 0.75rem  (12px)
4   = 1rem     (16px)
6   = 1.5rem   (24px)
8   = 2rem     (32px)
12  = 3rem     (48px)
16  = 4rem     (64px)
20  = 5rem     (80px)
24  = 6rem     (96px)
```

### Padding Guidelines
- **Small elements** (buttons, badges): `p-2` to `p-3`
- **Cards/boxes**: `p-6` to `p-8`
- **Sections**: `p-12` (mobile), `p-16` (desktop)

### Gap Guidelines
- **Tight layouts**: `gap-2` to `gap-3`
- **Normal layouts**: `gap-4` to `gap-6`
- **Spacious layouts**: `gap-8` to `gap-12`

---

## Component Design Patterns

### Glassmorphism Cards
```tsx
className="p-8 rounded-2xl border border-pink-400/30 
  bg-slate-800/50 backdrop-blur-sm 
  hover:border-pink-400/60 transition-all duration-300"
```

**Features:**
- Semi-transparent background (50% opacity)
- Backdrop blur for depth
- Subtle pink border with transparency
- Smooth hover transitions
- Rounded corners (2xl = 16px)

### Gradient Buttons
```tsx
className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 
  text-white font-bold rounded-lg 
  hover:shadow-lg hover:shadow-pink-500/50 transition-all"
```

**Features:**
- Left-to-right gradient
- Pink to purple transition
- Glow effect on hover
- Rounded corners for softness

### Text Gradients
```tsx
className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 
  bg-clip-text text-transparent"
```

**Features:**
- 3-color gradient for richness
- Clipped to text shape
- Creates eye-catching headings

---

## Animation System

### Timing Values
```css
duration-300  /* Default: 300ms */
duration-500  /* Slower transitions */
duration-700  /* Very slow */
duration-1000 /* 1 second animations */
```

### Easing Functions
```css
ease-out      /* Starts fast, ends slow */
ease-in       /* Starts slow, ends fast */
ease-in-out   /* Slow start and end */
linear        /* Constant speed */
```

### Custom Animations

#### Blob Animation
```css
@keyframes blob {
  0%, 100%   { transform: translate(0, 0) scale(1); }
  25%        { transform: translate(20px, -50px) scale(1.1); }
  50%        { transform: translate(-20px, 20px) scale(0.9); }
  75%        { transform: translate(50px, 50px) scale(1.05); }
}
```
**Usage:** Background floating blob effect
**Duration:** 7 seconds
**Count:** Infinite

#### Fade In Animations
```css
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
}
```
**Usage:** Hero section entrance
**Duration:** 800ms

#### Scale Up
```css
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
```
**Usage:** Modal entrance
**Duration:** 400ms

---

## Responsive Design Strategy

### Mobile-First Approach
```
Default (mobile)    → 320px+ (all features)
sm: 640px          → Slightly larger text
md: 768px          → Grid layouts (2 columns)
lg: 1024px         → Full layouts (3 columns)
```

### Breakpoint Usage
```tsx
// Text responsiveness
className="text-lg sm:text-xl md:text-2xl lg:text-3xl"

// Grid responsiveness
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

// Spacing responsiveness
className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
```

### Touch-Friendly Design
- Buttons: minimum 44x44px (12px padding)
- Spacing: adequate gaps between interactive elements
- Hover states transform to focus states on mobile
- Modal works seamlessly on small screens

---

## Interactive States

### Hover States
```css
/* Card hover */
hover:border-pink-400/60           /* Enhanced border */
hover:bg-slate-800/80              /* Darker background */
hover:-translate-y-1               /* Lift effect */
hover:shadow-lg                    /* Drop shadow */

/* Button hover */
hover:from-pink-400                /* Gradient shift */
hover:shadow-pink-500/50           /* Glow effect */
hover:scale-105                    /* Slight scale up */
```

### Active/Focus States
```css
/* Active navigation link */
border-pink-400                    /* Solid border */
bg-pink-500/20                     /* Background color */
text-pink-300                      /* Text color change */
```

### Disabled States (when applicable)
```css
opacity-50                         /* Reduced visibility */
cursor-not-allowed                 /* Cursor change */
hover:shadow-none                  /* No hover effects */
```

---

## Visual Effects

### Glow Effects
```tsx
// Pink glow
className="shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70"

// Neon glow
className="animate-pulse-glow"  /* Custom pulsing glow */
```

### Blur Effects
```tsx
// Backdrop blur
className="backdrop-blur-sm"    /* Slight blur */

// Blur on decorative elements
className="blur-3xl"            /* Heavy blur for backgrounds */
```

### Opacity Effects
```tsx
// Semi-transparent backgrounds
className="bg-slate-800/50"     /* 50% opacity */
className="bg-pink-500/20"      /* 20% opacity */
```

---

## Loading & Transitional States

### Loading Animation
```tsx
className="animate-pulse"          /* Built-in fade pulse */
```

### Skeleton Screens
Could use shimmer effect:
```tsx
className="animate-shimmer"
```

### State Transitions
All state changes use:
```tsx
transition-all duration-300        /* Smooth transitions */
```

---

## Accessibility Considerations

### Color Contrast
- Text on dark: White text on slate-900 (21:1 ratio) ✓
- Interactive: Pink/purple sufficient contrast ✓

### Focus States
```tsx
focus:outline-none                 /* Remove default */
focus:ring-2 focus:ring-pink-400   /* Custom focus ring */
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on images
- Button elements for interactive items
- Links for navigation

### Keyboard Navigation
- Tab-through all interactive elements
- Smooth scroll on link clicks
- Escape to close modals
- Arrow keys in carousel

---

## Dark Mode Optimization

The entire site is optimized for dark mode:
- High contrast text on dark backgrounds
- Subtle glows instead of harsh shadows
- Transparent overlays for depth
- Purple/pink accent colors work well in dark

---

## Design Tokens Summary

```json
{
  "colors": {
    "primary": "#ec4899",      // Pink
    "secondary": "#a855f7",    // Purple
    "background": "#0f172a",   // Slate-900
    "surface": "#1e293b",      // Slate-800
    "text": "#ffffff"          // White
  },
  "spacing": {
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem"
  },
  "animation": {
    "fast": "200ms",
    "normal": "300ms",
    "slow": "500ms",
    "verySlow": "1000ms"
  },
  "borderRadius": {
    "sm": "0.375rem",
    "md": "0.5rem",
    "lg": "1rem",
    "xl": "1.5rem",
    "2xl": "1rem"
  }
}
```

---

## Best Practices for Maintaining Design

### Color Usage Rules
1. Pink for primary CTAs and highlights
2. Purple for secondary accents
3. Keep contrast ratios ≥ 4.5:1 for accessibility
4. Use opacity for depth, not color changes

### Animation Best Practices
1. Keep animations under 1 second for UX
2. Use ease-out for entrances, ease-in for exits
3. Avoid flashing/rapid animations
4. GPU-accelerate with `transform` and `opacity`

### Responsive Best Practices
1. Test on actual devices
2. Ensure touch targets are ≥ 44x44px
3. Don't hide critical content on mobile
4. Use flexible layouts (flexbox/grid)

### Performance
1. Prefer CSS animations over JS
2. Use `will-change` sparingly
3. Lazy load images
4. Minify CSS in production

---

**Created For:** Marin Kitagawa Premium Fan Site  
**Updated:** 2026  
**Design Version:** 1.0
