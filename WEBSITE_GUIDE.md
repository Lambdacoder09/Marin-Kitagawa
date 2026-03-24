# 🌸 Marin Kitagawa - Premium Fan Website

A modern, visually rich anime character website celebrating Marin Kitagawa from "My Dress-Up Darling" built with Bun.js, React, TypeScript, and Tailwind CSS.

## 🎨 Features

### Design Excellence
- **Anime-Inspired Aesthetic**: Pink, purple, and black color palette with glassmorphism effects
- **Premium Animations**: Smooth fade-in effects, blob animations, hover transitions, and glow effects
- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Interactive Elements**: Smooth scrolling navigation, modal lightbox, and hover effects

### Website Sections

1. **Hero Section** - Full-screen landing with character introduction
2. **Character Profile** - Bio, personality, hobbies, and skills
3. **Personality Traits** - Interactive trait cards with detailed descriptions
4. **Cosplay Gallery** - Categorized image gallery with lightbox modal
5. **Quotes Section** - Carousel of iconic character quotes
6. **Trivia/Facts** - Fun facts organized by category
7. **Navigation** - Smooth scrolling nav bar with active link indicators
8. **Footer** - Credits and quick links

## 🛠️ Tech Stack

- **Runtime**: Bun.js (Fast JavaScript runtime)
- **Frontend**: React 19
- **Language**: TypeScript with TSX
- **Styling**: Tailwind CSS v4 with custom animations
- **Build Tool**: Bun's native bundler
- **Data**: Static JSON files (no database needed)

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── MainPage.tsx        # Main page layout
│   ├── Navigation.tsx       # Top navigation bar
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── CharacterInfo.tsx    # Character details
│   ├── PersonalityTraits.tsx # Personality cards
│   ├── CosplayGallery.tsx   # Gallery grid
│   ├── ImageModal.tsx       # Lightbox modal
│   ├── QuotesSection.tsx    # Quotes carousel
│   ├── TriviaSection.tsx    # Facts & trivia
│   └── Footer.tsx           # Footer section
├── data/                    # JSON data files
│   ├── character.json       # Character info & quotes
│   ├── details.json         # Age, school, skills
│   └── gallery.json         # Image categories & URLs
├── types/                   # TypeScript interfaces
│   └── index.ts            # Type definitions
├── App.tsx                  # Root component
├── frontend.tsx             # React entry point
├── index.css                # Global styles & animations
└── index.html               # HTML template
```

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed (v1.0+)
- Node.js 18+ (optional, for compatibility)

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

The website will be available at `http://localhost:3000/`

## 📊 Data Structure

### character.json
Contains main character information:
- Basic info (name, description, tagline)
- Personality traits with icons and descriptions
- Iconic quotes with context
- Fun facts organized by category

### details.json
Structured character details:
- Age, school, grade, birthday
- Hobbies and interests
- Skills and talents
- Favorite genres

### gallery.json
Image gallery structure:
- Categories (Cosplay, School, Casual, etc.)
- Images with titles, descriptions, and URLs
- Organized collections for easy management

## 🎨 Styling Features

### Custom Animations
- **Blob Animation**: Floating gradient blobs in background
- **Fade In**: Elements fade in on page load
- **Scale Up**: Modal entries with scale animation
- **Pulse Glow**: Subtle pulsing glow effects
- **Float**: Floating UI elements
- **Shimmer**: Light shimmer effects on hover

### Color Palette
- **Primary**: Pink (#ec4899) - Character signature color
- **Secondary**: Purple (#a855f7) - Complementary accent
- **Background**: Slate-900 (#0f172a) - Dark base
- **Accents**: White, translucent overlays

### Responsive Breakpoints
- Mobile-first design
- Fully responsive on all screen sizes
- Touch-friendly interactive elements
- Optimized images with lazy loading

## 🔧 Customization

### Update Character Data
Edit JSON files in `src/data/` to customize:
- Character info and quotes
- Gallery images and categories
- Personal details and hobbies

### Add New Sections
1. Create a new component in `src/components/`
2. Add the section to `MainPage.tsx`
3. Update navigation if needed
4. Style using Tailwind classes

### Change Color Scheme
Modify color values in:
- Component className attributes
- `index.css` for custom animations
- Adjust pink/purple references throughout

## ✨ Key Features Explained

### Navigation Bar
- Sticky navigation with blur effect on scroll
- Active section highlighting
- Smooth scroll to sections
- Mobile-responsive design

### Hero Section
- Large character image with gradient overlay
- Animated statistics
- Call-to-action buttons
- Scroll indicator animation

### Gallery Modal
- Click images to view in fullscreen
- Keyboard navigation (← →, ESC)
- Previous/next image buttons
- Image information display

### Quotes Carousel
- Interactive carousel with indicators
- Click to jump to specific quote
- Previous/next navigation
- Quick preview grid below

### Responsive Images
- Fallback images for broken URLs
- Proper aspect ratios maintained
- Hover zoom effects
- Lazy loading ready

## 🌐 Deployment

### Static Hosting
This site can be deployed to any static host:
- Vercel
- Netlify
- GitHub Pages
- CloudFlare Pages

### Build for Production
```bash
bun run build
# Output will be optimized for production
```

## 📝 JSON Format Reference

### Character Trait
```json
{
  "name": "Cheerful",
  "description": "Radiates positivity...",
  "icon": "✨"
}
```

### Quote
```json
{
  "text": "When you love something...",
  "context": "About her passion",
  "episode": "Episode 1"
}
```

### Gallery Image
```json
{
  "id": "shizuku-1",
  "url": "https://...",
  "title": "Costume Title",
  "category": "Shizuku Cosplay",
  "description": "..."
}
```

## 🔐 Performance

- Lightweight component bundles
- CSS-only animations (no JavaScript overhead)
- Optimized Tailwind with PurgeCSS
- Minimal external dependencies
- Fast page load with Bun's bundler

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Best Practices

### Adding Images
1. Host on external CDN (Zerochan, Imgur, etc.)
2. Use HTTPS URLs only
3. Include image fallbacks in components
4. Optimize image sizes before URL

### Content Updates
1. Keep JSON data well-formatted
2. Use consistent spacing and naming
3. Test changes before committing
4. Document any structural changes

### Performance Tips
1. Lazy load images for pagination
2. Use CSS animations instead of JavaScript
3. Minimize modal re-renders
4. Cache static assets

## 🤝 Contributing

To extend this website:
1. Create feature branches
2. Follow the existing component structure
3. Use TypeScript for type safety
4. Test responsive design
5. Keep animations performant

## ⚡ Troubleshooting

### Port Already in Use
```bash
# Use a different port
bun --hot src/index.ts -- --port 3001
```

### Images Not Loading
- Check image URLs are accessible
- Verify HTTPS URLs work
- Check browser console for CORS issues
- Use fallback images

### Styles Not Applying
- Ensure Tailwind plugin in bunfig.toml
- Check component className syntax
- Rebuild with `bun run build`

## 📄 License & Attribution

- Character: Marin Kitagawa from "My Dress-Up Darling"
- Series Creator: Shinichi Fukuda
- Images: Sourced from Zerochan and fanwiki
- Fan Site: Created for celebration and appreciation

## 🎊 Credits

Built with ❤️ using modern web technologies to celebrate the wonderful character of Marin Kitagawa.

---

**Happy exploring!** ✨👗💖
