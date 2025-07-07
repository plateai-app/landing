# 🍽️ PlateAI Landing Page

**Personalized nutrition made easy for Tanzania**

A modern, responsive landing page for PlateAI - a nutrition-focused meal planning platform that provides personalized meal recommendations using locally available Tanzanian foods.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Loading** - Optimized for performance with minimal dependencies
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Accessibility** - WCAG compliant with proper contrast and navigation

## 🎯 Sections

### 🏠 **Hero Section**
- Compelling headline and value proposition
- Clear call-to-action buttons
- Visual hero image with fallback icons

### 🏥 **Health Conditions**
- Showcases conditions PlateAI helps manage:
  - Diabetes
  - Hypertension  
  - Obesity
  - Chronic Kidney Disease

### ⚡ **Key Features**
- **Personalized Plans** - Tailored to individual needs
- **Local Ingredients** - Using foods available in Tanzania
- **Expert Support** - Access to qualified nutritionists

### 👩‍⚕️ **Nutritionist Portal**
- Client management platform
- WhatsApp integration for meal reminders
- Data-driven insights and analytics
- Remote consultation capabilities

### 🍴 **Restaurant Network**
- "Healthy Food as a Service" for vendors
- Training and equipment provided
- Focus on Dar es Salaam market

### ℹ️ **About Section**
- Company mission and story
- Embedded Falling Walls presentation video
- Personal connection to health challenges

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - Interactive features and animations
- **Font Awesome** - Icons and visual elements
- **Tailwind CSS** - Utility-first CSS framework

## 🎨 Design System

### Color Palette
```css
--primary-color: #35395C    /* Deep Navy */
--secondary-color: #21AC78  /* Teal Green */
--accent-color: #FAD11E     /* Golden Yellow */
--dark-color: #21192E       /* Dark Purple */
--light-color: #EAEAEA      /* Light Gray */
Typography

Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
Responsive sizing with fluid typography

🚀 Quick Start
Prerequisites

Any modern web browser
Optional: Local web server for development

Installation

Clone the repository

bashgit clone https://github.com/yourusername/plateai-landing.git
cd plateai-landing

Open in browser

bash# Simply open index.html in your browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux

Or serve locally (optional)

bash# Python 3
python -m http.server 8000

# Node.js (if you have live-server installed)
npx live-server

# Then visit http://localhost:8000
📁 Project Structure
plateai-landing/
├── index.html              # Main landing page
├── images/
│   ├── hero.png           # Hero section image
│   ├── nutritionist.png   # Nutritionist portal image
│   └── features/          # Feature section images
├── css/
│   └── styles.css         # Additional styles (optional)
├── js/
│   └── script.js          # Additional scripts (optional)
└── README.md              # Project documentation
🌐 Deployment
GitHub Pages
bash# Push to main branch
git add .
git commit -m "Deploy landing page"
git push origin main

# Enable GitHub Pages in repository settings
# Your site will be available at: https://yourusername.github.io/plateai-landing
Netlify

Drag and drop the project folder to netlify.com
Or connect your GitHub repository for automatic deployments
