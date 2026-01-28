# Fold.app - Unfold Your Story

A beautiful, modern landing page for Fold.app built with Nuxt 4, Vue 3, and Tailwind CSS. This project converts a design software export into a fully functional, component-based Nuxt application.

## 🎨 Design Philosophy

Fold.app is designed as a private sanctuary for memories, featuring:
- **Elegant Typography**: Cormorant Garamond for display text, Inter for body text
- **Sophisticated Color Palette**: Deep reds (#990000), warm cream (#F2EFE5), and charcoal (#1A1A1A)
- **Glass Morphism**: Subtle backdrop blur effects and translucent elements
- **Floating Animations**: Gentle animations that bring memories to life

## 🏗️ Project Structure

```
app/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind components
├── components/
│   ├── AppLogo.vue               # Brand logo component
│   ├── AppNavigation.vue         # Main navigation
│   ├── CtaSection.vue            # Call-to-action section
│   ├── EmailSignupForm.vue       # Email signup with validation
│   ├── FragmentCard.vue          # Individual memory fragment
│   ├── FragmentsSection.vue      # Scattered memories section
│   ├── HeroSection.vue           # Hero section with background
│   ├── MemoryCard.vue            # Photo memory card
│   ├── MemoryGallerySection.vue  # Memory showcase grid
│   ├── PortraitCard.vue          # Portrait photo component
│   ├── ProcessSection.vue        # Three-step process
│   ├── ProcessStep.vue           # Individual process step
│   ├── QuoteCard.vue             # Journal quote card
│   ├── ReflectionCard.vue        # Daily reflection card
│   └── VoiceNoteCard.vue         # Voice note visualization
├── composables/
│   ├── useEmailSignup.ts         # Email signup logic
│   └── useTheme.ts               # Theme management
├── layouts/
│   └── default.vue               # Default layout
├── pages/
│   └── index.vue                 # Main landing page
├── utils/
│   ├── animations.ts             # Animation utilities
│   └── constants.ts              # App constants and config
├── app.vue                       # Root app component
└── error.vue                     # Error page
```

## 🚀 Features

### Components Architecture
- **Modular Design**: Each section is broken into reusable components
- **Props-Based**: Components accept data through props for flexibility
- **Composables**: Business logic separated into composable functions
- **TypeScript**: Full type safety throughout the application

### Sections
1. **Hero Section**: Full-screen hero with navigation and call-to-action
2. **Memory Gallery**: Grid of different memory types (photos, voice notes, quotes)
3. **Process Section**: Three-step process explanation with visual element
4. **Fragments Section**: Scattered memory cards with floating animations
5. **CTA Section**: Email signup form with validation

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Glass morphism effects and brand-specific styles
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Dark Mode Ready**: Theme system prepared for dark mode toggle

### Functionality
- **Email Validation**: Client-side email validation with error handling
- **Form Submission**: Simulated API integration with loading states
- **Smooth Animations**: CSS animations and transitions
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile**: Single column layouts, stacked navigation
- **Tablet**: Two-column grids, adjusted spacing
- **Desktop**: Full three-column layouts, hover effects

## 🎯 Performance

- **Nuxt 4**: Latest framework with improved performance
- **Auto-imports**: Components and composables automatically imported
- **Image Optimization**: Responsive images with proper loading
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```js
colors: {
  primary: "#8B0000",
  "background-light": "#F2EFE5",
  "background-dark": "#1A1A1A",
  "brand-red": "#990000",
  "brand-cream": "#F2EFE5",
  "brand-charcoal": "#1A1A1A",
}
```

### Content
Update content in `app/utils/constants.ts`:
```js
export const APP_CONFIG = {
  name: 'Fold.app',
  tagline: 'Unfold Your Story',
  description: '...'
}
```

### Images
Replace image URLs in the `IMAGES` constant or integrate with a CMS.

## 🚀 Deployment

This Nuxt application can be deployed to:
- **Vercel**: Zero-config deployment
- **Netlify**: Static site generation
- **Cloudflare Pages**: Edge deployment
- **Traditional hosting**: Static files or Node.js server

## 📄 License

This project is created as a demonstration of converting design exports to modern web applications.

---

Built with ❤️ using Nuxt 4, Vue 3, and Tailwind CSS
