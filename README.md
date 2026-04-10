# TheCoreFusion - Digital Agency Website

A modern, professional, and fully responsive website for TheCoreFusion digital agency. Built with React.js, Vite, and Tailwind CSS with a dark, premium aesthetic suitable for US global clients.

## 🌟 Features

- ✨ **Modern Dark Theme**: Premium design with cyan and purple gradients
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎨 **Professional UI/UX**: Clean, minimal design with smooth animations
- 🧩 **Reusable Components**: Well-structured React components
- 🔍 **SEO Optimized**: Semantic HTML and meta tags included
- 📊 **No Backend Required**: Static website with dummy data

## 📋 Sections Included

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero Section** - Eye-catching hero with CTA buttons
3. **About** - Company introduction, mission, and vision
4. **Services** - 5 core services with icons and descriptions
   - Social Media Marketing
   - Shopify Store Development
   - WordPress Website Development
   - SEO (Search Engine Optimization)
   - Custom Web Development
5. **Portfolio** - Project showcase with hover effects
6. **Contact** - Contact form and social media links
7. **Footer** - Links, newsletter signup, and legal info

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 4.3
- **Styling**: Tailwind CSS 3.3
- **Icons**: React Icons 4.11
- **Scrolling**: React Scroll 1.8
- **Package Manager**: npm or yarn

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Navigate to project directory**
   ```bash
   cd CoreFusion
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🚀 Running the Project

After installation, the development server will start automatically. Open your browser and navigate to:

```
http://localhost:5173
```

The website will automatically reload when you make changes to the code.

## 📁 Project Structure

```
CoreFusion/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Design Highlights

- **Color Scheme**:
  - Primary: Cyan (#00d4ff)
  - Secondary: Indigo (#6366f1)
  - Dark Background: Gray-900 (#111827)
  - Accents: Gradients combining cyan, blue, and purple

- **Typography**: Clean, modern fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Spacing**: Consistent padding and margins for professional appearance
- **Responsive Grid**: Mobile-first approach with Tailwind breakpoints

## 🔧 Customization Guide

### Change Company Name
Update the company name in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `index.html` (title and meta tags)

### Update Services
Edit the `services` array in `src/components/Services.jsx`

### Add Portfolio Items
Modify the `portfolioItems` array in `src/components/Portfolio.jsx`

### Change Contact Information
Update the `contactInfo` and `socialLinks` arrays in `src/components/Contact.jsx`

### Modify Colors
Edit the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#00d4ff',
      secondary: '#6366f1',
      // Add more custom colors
    }
  }
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 SEO Optimization

- Semantic HTML structure
- Meta tags for title, description, and social media
- Proper heading hierarchy
- Responsive images
- Fast loading performance (Vite)
- Clean URL structure with smooth scrolling

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder contents
```

## 📄 License

This project is open source and available for personal and commercial use.

## 💼 Next Steps

1. **Replace placeholder images**: Update portfolio images in `src/components/Portfolio.jsx`
2. **Add form backend**: Connect the contact form to an email service (e.g., EmailJS, Sendgrid)
3. **Add analytics**: Integrate Google Analytics or similar
4. **Customize branding**: Update colors, fonts, and imagery
5. **Add more sections**: Testimonials, team, blog, etc.
6. **Implement dark mode toggle**: Add theme switching capability
7. **Add animations library**: Consider Framer Motion for advanced animations

## 🤝 Support

For issues, questions, or improvements, please create an issue or contact support.

---

**Made with ❤️ for innovative businesses worldwide**

Happy coding! 🚀
