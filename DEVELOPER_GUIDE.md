# 🚀 Developer Quick Start

## Installation & Running

```bash
# Install dependencies
bun install

# Start dev server (with hot reload)
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

**Dev server available at:** `http://localhost:3000/`

---

## Project Quick Map

| File/Folder | Purpose |
|---|---|
| `src/components/` | All React components |
| `src/data/` | JSON data files for content |
| `src/types/index.ts` | TypeScript type definitions |
| `src/index.css` | Global styles and animations |
| `src/App.tsx` | Root React component |
| `bunfig.toml` | Bun configuration with Tailwind plugin |

---

## Component Architecture

```
MainPage (Layout Container)
├── Navigation (Sticky Header)
├── HeroSection (Hero/Landing)
├── CharacterInfo (Bio & Details)
├── PersonalityTraits (Trait Cards)
├── CosplayGallery (Photo Grid + Modal)
│   └── ImageModal (Lightbox)
├── QuotesSection (Quote Carousel)
├── TriviaSection (Facts)
└── Footer (Credits & Links)
```

---

## Common Tasks

### 🖼️ Add a New Gallery Category

1. Edit `src/data/gallery.json`:
```json
{
  "name": "New Category",
  "description": "Category description",
  "images": [
    {
      "id": "unique-id",
      "url": "https://image-url.jpg",
      "title": "Image Title",
      "category": "New Category",
      "description": "Image desc"
    }
  ]
}
```

### 📝 Add a New Quote

Edit `src/data/character.json`:
```json
{
  "text": "Your quote here",
  "context": "Context or meaning",
  "episode": "Episode X"
}
```

### ✨ Add a New Personality Trait

Edit `src/data/character.json`:
```json
{
  "name": "TraitName",
  "description": "Description of the trait",
  "icon": "🎨"
}
```

### 🎨 Customize Colors

Change these in components:
- `from-pink-400 to-purple-400` - Primary gradient
- `bg-slate-900` - Background
- `border-pink-400/30` - Border colors

### 🎭 Add New Animation

Add to `src/index.css` in `@keyframes`:
```css
@keyframes myAnimation {
  from {
    /* Start state */
  }
  to {
    /* End state */
  }
}

.animate-my-animation {
  animation: myAnimation 0.5s ease-out;
}
```

---

## Styling Guidelines

### Tailwind Classes Used
- **Colors**: `pink-400`, `purple-500`, `slate-900`
- **Spacing**: `p-6`, `gap-8`, `mb-12`
- **Animations**: `animate-fade-in`, `animate-bounce`, `hover:scale-110`
- **Responsive**: `sm:`, `md:`, `lg:` prefixes
- **Effects**: `backdrop-blur-sm`, `drop-shadow`, `border`

### Custom Animations
- `animate-blob` - Floating blob effect
- `animate-fade-in-left/right` - Entrance animations
- `animate-scale-up` - Modal entry
- `animate-float` - Floating elements

---

## JSON Data Format

### character.json Structure
```json
{
  "name": "Marin Kitagawa",
  "fullName": "喜多川 海夢",
  "description": "...",
  "tagline": "...",
  "profileImage": "https://...",
  "personality": ["trait1", "trait2"],
  "traits": [{name, description, icon}],
  "quotes": [{text, context, episode}],
  "facts": [{title, description, category}]
}
```

### gallery.json Structure
```json
{
  "categories": [
    {
      "name": "Category",
      "description": "Desc",
      "images": [{id, url, title, category, description}]
    }
  ]
}
```

### details.json Structure
```json
{
  "age": 17,
  "school": "School Name",
  "grade": "2nd Year",
  "birthday": "June 25",
  "hobbies": ["hobby1", "hobby2"],
  "favoriteGenres": ["genre1"],
  "skills": ["skill1"]
}
```

---

## Debugging Tips

### Check Console for Errors
```bash
# Check browser DevTools (F12)
# Look for network errors on images
# Check for TypeScript type mismatches
```

### Test Responsive Design
- Use browser DevTools responsive mode (F12 → Responsive)
- Test on mobile, tablet, desktop
- Check touch interactions on mobile

### Hot Reload Issues
```bash
# If changes not reflecting:
# 1. Save the file again
# 2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
# 3. Restart bun server
```

---

## Performance Optimization

### Image Optimization
1. Use external CDN for images
2. Include fallback images
3. Lazy load images on scroll
4. Use `onError` handlers for broken images

### CSS Optimization
- Tailwind automatically purges unused styles
- CSS animations are GPU-accelerated
- Minimal JavaScript for performance

### Bundle Size
```bash
# Check bundle size
bun run build
# Output size shown in build output
```

---

## Browser DevTools Tips

### Inspect Animations
1. Open DevTools (F12)
2. Go to Animations panel
3. Play/pause and inspect animation timing

### Debug Tailwind Classes
1. Inspect element
2. See applied classes in Styles tab
3. Toggle classes to test changes

### Network Performance
1. Check image load times
2. Verify HTTPS on all resources
3. Monitor API responses

---

## Responsive Design Breakpoints

```
Mobile-first approach:
- Base: Mobile (320px+)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
```

Example:
```tsx
<div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
  Responsive text
</div>
```

---

## TypeScript Tips

### Component Props
```tsx
interface ComponentProps {
  data: Type;
  onAction: () => void;
}

export default function Component({ data, onAction }: ComponentProps) {
  return <div>...</div>;
}
```

### JSON Import
```tsx
import data from "../data/file.json";
// Type it explicitly:
const typedData: CharacterData = data as CharacterData;
```

---

## Deployment Checklist

- [ ] Update image URLs to production CDN
- [ ] Check all links work correctly
- [ ] Test on mobile devices
- [ ] Verify animations performant
- [ ] Check bundle size
- [ ] Test form inputs (if any)
- [ ] Verify accessibility
- [ ] Check SEO meta tags
- [ ] Test in multiple browsers
- [ ] Build production: `bun run build`

---

## Useful Commands

```bash
# Development
bun run dev          # Start with hot reload
bun run devA-hot     # Alternative

# Production
bun run build        # Create optimized build
bun start            # Run production build

# Utilities
bunx prettier .      # Format code
bunx tsc --noEmit    # Check TypeScript
```

---

## Need Help?

1. **Tailwind CSS**: https://tailwindcss.com/docs
2. **React Docs**: https://react.dev
3. **TypeScript**: https://www.typescriptlang.org/docs
4. **Bun**: https://bun.sh/docs
5. **Browser DevTools**: F12 or Cmd+Option+I

---

**Happy coding!** 🎉
