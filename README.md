# Responsive Watches Website - React App

A modern, responsive React application showcasing luxury watches with smooth animations and interactive features.

## Features

- **🔐 User Authentication**: Secure login/signup system with persistent sessions
- **Complete E-commerce Functionality**: Browse watches, add to cart, and complete checkout
- **💰 INR Currency**: All prices displayed in Indian Rupees (₹)
- **Shopping Cart System**: Persistent cart with quantity controls and item management
- **Checkout Process**: Multi-step checkout with shipping and payment forms
- **Watches Catalog**: Filterable and sortable watch collection with categories
- **📱 Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Interactive Navigation**: Improved mobile menu with hamburger icon and smooth animations
- **Watches Slider**: Swiper.js powered carousel with creative 3D effects
- **GSAP Animations**: Smooth scroll-triggered animations
- **Modern UI**: Dark theme with elegant design and hover effects
- **Cross-browser Compatible**: Works on all modern browsers

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing for authentication flow
- **CSS3** - Custom CSS with CSS variables and responsive design
- **GSAP** - Professional animation library
- **Swiper.js** - Touch slider with 3D effects
- **Remix Icons** - Beautiful icon set
- **Montserrat Font** - Google Fonts integration
- **LocalStorage** - Persistent authentication and user data

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation component
│   ├── Header.css         # Header styles
│   ├── Home.js            # Hero section with watches slider
│   ├── Home.css           # Home section styles
│   ├── WatchesList.js     # Watch catalog with filtering and cart
│   ├── WatchesList.css    # Watch catalog styles
│   ├── ShoppingCart.js    # Shopping cart and checkout system
│   ├── ShoppingCart.css   # Cart and checkout styles
│   ├── About.js           # Company information section
│   └── About.css          # About section styles
├── App.js                 # Main app component with cart state
├── App.css                # Global styles
├── index.js               # App entry point
└── index.css              # Base styles

public/
├── assets/                # Images and static assets
│   ├── img/              # Watch images
│   ├── css/              # External CSS (if needed)
│   └── js/               # External JS (if needed)
├── favicon.png            # Site icon
├── index.html             # HTML template
└── manifest.json          # PWA manifest
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd responsive-watches-website-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your app
4. Your site will be available at a vercel.app subdomain

### Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `build` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 📞 Contact Information

- **Email**: fauzan.javid@gmail.com
- **Phone**: +91 7338360428
- **Location**: Bengaluru, Karnataka, India

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Customization

### Colors
Modify CSS variables in `src/App.css`:
```css
:root {
  --title-color: hsl(0, 0%, 100%);
  --text-color: hsl(0, 0%, 60%);
  --body-color: hsl(0, 0%, 0%);
}
```

### Content
Update text content in the respective component files:
- `src/components/Header.js` - Navigation links and social media
- `src/components/Home.js` - Hero content and call-to-action
- `src/components/WatchesList.js` - Watch catalog data and descriptions
- `src/components/About.js` - Company information and features

### Images
Replace images in `public/assets/img/` folder and update references in components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading of GSAP and Swiper libraries
- Optimized images and assets
- CSS custom properties for efficient theming
- Responsive images with proper sizing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspiration from Bedimcode
- Icons from Remix Icons
- Fonts from Google Fonts
- Animation library GSAP
- Slider component Swiper.js
