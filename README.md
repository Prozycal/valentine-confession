# 💖 Valentine's Day Confession!

[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.0-blue)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.1-orange)](https://motion.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4)](https://tailwindcss.com/)

A playful and interactive Valentine's Day confession web application with animations and surprises. Perfect for asking that special someone to be your Valentine! 💌

![Demo Screenshot](https://i.ibb.co.com/67ckNmMb/image-2025-02-08-215149839.png)

## ✨ Features

- 🎉 Interactive yes/no buttons with playful animations
- 🎨 Dynamic background particles effect
- 💬 Progressive response messages for the "No" button
- 🎊 Confetti explosion celebration on "Yes"
- 📱 Responsive design for all screen sizes
- 🌈 Smooth animations powered by Framer Motion
- 💌 Direct WhatsApp integration after acceptance

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Prozycal/valentine-confession.git
```

2. Install dependencies:
```bash
cd valentine-confession
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🎨 Customization

1. **Replace Images**:
   - Place your custom images in `/public` directory
   - Update image paths in `src/app/page.tsx`:
     ```typescript
     const [image, setImage] = useState("/your-custom-image.jpg");
     ```

2. **Modify Messages**:
   - Edit the message responses in the `handleNoClick` function

3. **Update WhatsApp Link**:
   ```typescript
   href="https://wa.me/YOUR_PHONE_NUMBER?text=hai"
   ```

4. **Customize Styles**:
   - Modify the Tailwind classes in the JSX
   - Update the gradient colors in the main div:
     ```jsx
     className="bg-gradient-to-r from-rose-500 to-pink-400"
     ```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [TSParticles](https://particles.js.org/)
- [Canvas Confetti](https://www.kirilv.com/canvas-confetti/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by frrlverse