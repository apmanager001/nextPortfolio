# Robert Foley - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing full-stack development projects, travel adventures, and photography from around the world.

## 🌟 Features

### **Portfolio Section**

- **Interactive Project Showcase**: Display of 6+ full-stack projects with detailed descriptions
- **Technology Stack**: Comprehensive skills section with frameworks, languages, and services
- **Project Categories**: Organized by type (NPM packages, e-commerce, SaaS, web applications)
- **Live Project Links**: Direct links to deployed applications and GitHub repositories

### **Travel Adventures**

- **Interactive World Map**: Choropleth map showing 15+ countries visited across 4 continents
- **Travel Timeline**: Detailed visit dates and durations for each country
- **Travel Statistics**: Visual stats showing longest trips, recent visits, and favorite regions
- **Country Information**: Hover tooltips with visit details and country information

### **Photography Portfolio**

- **Photo Collections**: Organized galleries for Thailand, Cambodia, and local adventures
- **Interactive Carousel**: Smooth image navigation with thumbnail previews
- **Location-Based Organization**: Photos categorized by travel destinations
- **Responsive Gallery**: Optimized viewing experience across all devices

### **Blog Integration**

- **RSS Feed Integration**: Automatic blog post fetching from Substack
- **Search Functionality**: Real-time search through blog content
- **Responsive Blog Cards**: Modern card design with featured images
- **Social Sharing**: Optimized Open Graph and Twitter Card support

### **Modern UI/UX**

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Dark/Light Theme**: DaisyUI theme system with consistent styling
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠️ Technologies Used

### **Frontend**

- **Next.js 15**: React framework with App Router
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **Lucide React**: Beautiful, customizable icons

### **Data Visualization**

- **Nivo Charts**: Interactive choropleth map for travel visualization
- **GeoJSON**: World countries data for map rendering

### **Performance & SEO**

- **Next.js Image Optimization**: Automatic image optimization
- **Structured Data**: Schema.org markup for better SEO
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Sitemap Generation**: Dynamic sitemap for search engines
- **Robots.txt**: Proper crawling instructions

### **Analytics & Monitoring**

- **Google Analytics**: Website traffic and user behavior tracking
- **Performance Monitoring**: Core Web Vitals optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/foleyportfolio.git
   cd foleyportfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
foleyportfolio/
├── src/
│   ├── app/
│   │   ├── blog/           # Blog page and components
│   │   ├── contact/        # Contact page
│   │   ├── homePage/       # Home page components
│   │   ├── me/            # About me section
│   │   ├── photography/   # Photography gallery
│   │   ├── portfolio/     # Portfolio projects
│   │   ├── travel/        # Travel map and adventures
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout with SEO
│   │   ├── page.js        # Home page
│   │   ├── sitemap.js     # Dynamic sitemap
│   │   └── robots.js      # Robots.txt generation
│   └── components/        # Shared components
├── public/
│   ├── photos/           # Photography images
│   ├── projects/         # Project screenshots
│   ├── countries/        # Country flag images
│   ├── manifest.json     # PWA manifest
│   └── favicon.ico       # Site favicon
├── package.json
├── tailwind.config.mjs
└── README.md
```

## 🎨 Design System

The project uses a consistent design system built with:

- **Color Palette**: Primary, secondary, and accent colors with proper contrast
- **Typography**: Geist font family for modern, clean typography
- **Components**: Reusable DaisyUI components with custom styling
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Animations**: Smooth transitions and hover effects throughout

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive meta descriptions and titles
- **Structured Data**: Schema.org markup for better search visibility
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Proper crawling instructions
- **Performance**: Optimized Core Web Vitals
- **Accessibility**: Semantic HTML and ARIA labels

## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# RSS Feed URL
NEXT_PUBLIC_RSS_FEED_URL=your-substack-rss-feed
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for performance
- **Image Optimization**: Automatic Next.js image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact@robertfoley.us
- **Website**: [robertfoley.dev](https://robertfoley.dev)
- **LinkedIn**: [Robert Foley](https://linkedin.com/in/robertfoley)
- **GitHub**: [@robertfoley](https://github.com/robertfoley)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for the deployment platform
- **DaisyUI** for the beautiful component library
- **Lucide** for the beautiful icons
- **Nivo** for the data visualization library

---

Built with ❤️ by Robert Foley
