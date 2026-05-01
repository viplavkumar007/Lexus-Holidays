# Lexus Holidays – Website

Premium travel agency website for **Lexus Holidays**, Ranchi, Jharkhand.

Built with: **React + Vite + Tailwind CSS + Framer Motion**

---

## 📁 Folder Structure

```
lexus-holidays/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.png              ← Your logo (replace with final logo)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CTAStrip.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── Toast.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Packages.jsx
│   │   ├── Services.jsx
│   │   ├── Hotels.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── siteContent.js        ← ⭐ Edit ALL content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open: http://localhost:5173

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deployment

### Option A: Vercel (Recommended – Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✓

### Option B: Netlify

1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com) → Sites → Drag & Drop
3. Drag the `dist/` folder onto the Netlify dashboard
4. Done ✓

Or with Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## ✏️ Customisation Guide

### Update Business Info
Edit `src/data/siteContent.js`:

```js
export const brand = {
  name: "Lexus Holidays",
  phone: "+91 XXXXXXXXXX",        // ← Your phone
  whatsapp: "91XXXXXXXXXX",       // ← Country code + number (no +)
  email: "info@lexusholidays.in", // ← Your email
  address: "Your address here",
};
```

### Update WhatsApp Number
In `src/data/siteContent.js`, change `whatsapp` field:
```js
whatsapp: "919431600000",  // 91 = India code + 10-digit mobile
```

### Add/Edit Holiday Packages
In `siteContent.js`, edit the `holidayPackages` array.
Each package uses Unsplash image URLs (free). Replace with your own photos.

### Add/Edit Hotel Packages
Edit the `hotelPackages` array in `siteContent.js`.

### Change Colors
Edit `tailwind.config.js` → `colors` section.
Main colors used:
- `navy-900`: #102e50 (dark navy)
- `gold-500`: #F5C45E (gold)
- `amber-warm`: #E87E3E (orange)

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with active section highlight
- ✅ Hero with stats counter
- ✅ Holiday packages with category filter
- ✅ Hotel packages grid
- ✅ Services section
- ✅ About with trust signals
- ✅ Testimonials
- ✅ FAQ accordion with smooth animation
- ✅ Contact form → redirects to WhatsApp + Email
- ✅ Toast notifications
- ✅ Framer Motion scroll animations
- ✅ Accessibility: keyboard nav, ARIA labels
- ✅ Performance: lazy images, optimised renders
- ✅ Respects prefers-reduced-motion

---

## 🔧 Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| React Icons | 5 |

---

Made with ❤️ for Lexus Holidays, Ranchi
