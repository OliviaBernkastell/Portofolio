# Albert Assidiq - Portfolio Website

A modern, responsive portfolio website showcasing projects and skills as a Web Developer & AI Engineer. Built with pure HTML, CSS, and JavaScript with Tailwind CSS for styling.

## 🌟 Features

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Multi-language Support**: English and Indonesian language support
- **Interactive Animations**: Smooth scroll effects, typewriter animation, and hover states
- **Project Portfolio**: Dynamic project showcase with live demos
- **Contact Integration**: Direct WhatsApp and email contact options
- **Modern Tech Stack**: Utilizes Tailwind CSS, Font Awesome icons, and modern JavaScript

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Dynamic interactions and animations
- **Font Awesome** - Icon library

### Libraries & Dependencies
- **Anime.js** - Animation library for smooth transitions
- **ScrollReveal** - Scroll-triggered animations
- **Google Fonts** - Typography (Space Grotesk, JetBrains Mono, Exo 2, Rajdhani)

### Build Tools
- **No build process required** - Pure HTML/CSS/JS for maximum simplicity
- **Live deployment ready** - Can be hosted on any static hosting service

## 📁 Project Structure

```
portofolio/
├── index.html              # Main HTML file
├── script.js               # JavaScript functionality
├── portfolio.json          # Portfolio projects data
├── translations.json       # Multi-language translations
├── foto/                   # Project screenshots
│   ├── taut-pinang.png
│   ├── sisakti.png
│   ├── sekopinang.png
│   ├── reservasi-aula.png
│   ├── kipzai.png
│   ├── entri-kipapp.png
│   ├── yuki.png
│   ├── siap-pinang.png
│   └── foto.png
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No additional setup required!

### Local Development
For local development, you can use any static web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Responsive Design

The website is fully responsive and works seamlessly on:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1440px and up)

## 🌍 Multi-language Support

The website supports:
- **English** (default)
- **Indonesian**

Language switching is handled via the `translations.json` file and can be toggled using the language button in the navigation.

## 🎨 Customization

### Adding New Projects
1. Add project details to `portfolio.json`
2. Add project screenshot to the `foto/` folder
3. Update the `image` path in the JSON

### Modifying Colors
The main color scheme uses CSS custom properties. You can modify the gradients in the CSS:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
    --primary-color: #2563eb;
    --secondary-color: #0891b2;
}
```

### Adding New Sections
1. Add new HTML sections in `index.html`
2. Update navigation menu with new links
3. Add corresponding styles and animations as needed

## 📊 Portfolio Projects

The portfolio showcases 8 projects including:

1. **Taut Pinang** - Link management platform for BPS
2. **SEkoPinang** - Coffee shop data collection system
3. **SISAKTI** - Statistical data collection system
4. **Reservasi Aula** - Hall reservation system
5. **Entri Kinerja Pegawai** - Employee performance tracking
6. **KIPZAI** - Automated data entry system
7. **SIAPPinang** - Attendance management system
8. **Yuki** - Work notification application

Each project includes live demo links and technology stack information.

## 🌐 Deployment

This website can be deployed on any static hosting service:

- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- **Surge.sh**
- **Firebase Hosting**

### GitHub Pages Deployment
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select main branch and save
4. Access at `https://username.github.io/repository`

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Albert Assidiq**
- Web Developer & AI Engineer
- Email: assidiqalbert@gmail.com
- WhatsApp: +62 813-7050-1796
- GitHub: [@OliviaBernkastell](https://github.com/OliviaBernkastell)
- LinkedIn: [Albert Assidiq](https://www.linkedin.com/in/albert-assidiq/)
- Medium: [@assidiqalbert](https://medium.com/@assidiqalbert)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## ⭐ Show Your Support

If you like this project, please give it a ⭐ and share it with others!

---

Made with ❤️ and lots of ☕ by Albert Assidiq