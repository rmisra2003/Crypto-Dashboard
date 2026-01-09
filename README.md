# ₿ Crypto Soft-UI Dashboard

A high-fidelity, pixel-perfect cryptocurrency dashboard implementing the **Dark Neumorphism (Soft UI)** design aesthetic. Built with React 19 and Tailwind CSS, this project demonstrates advanced CSS shadow engineering to create a tactile, extruded interface.

![Project Preview](https://picsum.photos/seed/crypto/1200/630)

## 🚀 Live Demo
**Check out the live application here:** [https://crypto-soft-ui.vercel.app/](https://crypto-soft-ui.vercel.app/)

---

## ✨ Key Features

- **Dark Neumorphic UI:** A consistent "Soft UI" theme with custom dual-shadow layers for depth.
- **Dynamic Market Chart:** Integrated `Recharts` implementation with custom peak highlighting and gradient fills.
- **Interactive Sell Orders:** A functional data table with copy-to-clipboard functionality and active state scaling.
- **Responsive Architecture:** Fully mobile-responsive layout with a custom blur-backdrop drawer for small screens.
- **Accessible Design:** Implemented ARIA roles for tables and keyboard-accessible buttons.
- **Vercel Optimized:** Production-ready configuration including SPA routing and security headers.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS (Custom Shadow Configurations)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Font:** Plus Jakarta Sans
- **Deployment:** Vercel

---

## 🎨 Design Philosophy: Dark Neumorphism

Neumorphism (Soft UI) is a design trend that bridges the gap between flat design and skeuomorphism. In this dark mode implementation, the "extrusion" effect is achieved by precisely balancing two shadows:
1. **Light Shadow (Reflection):** `box-shadow: -10px -10px 30px #2e3238` — Simulates a light source hitting the top-left edge.
2. **Dark Shadow (Cast):** `box-shadow: 15px 15px 30px #141519` — Simulates the element casting a shadow on the surface.

The background color `#18191d` acts as the neutral surface, ensuring that both shadows are visible enough to create the 3D effect without breaking the dark aesthetic.

---

## 📁 Project Structure

```text
.
├── components/
│   ├── CryptoDashboard.tsx   # Main dashboard logic and charts
│   ├── Icons.tsx             # Centralized Lucide icon mapping
│   └── Sidebar.tsx           # Navigation and profile component
├── App.tsx                   # Main layout and responsive wrapper
├── index.html                # SEO, OG Meta tags, and Tailwind config
├── index.tsx                 # Application entry point
├── vercel.json               # Deployment configuration
└── README.md                 # Project documentation
```

---

## 🛠️ Local Development

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/crypto-soft-ui.git
   ```

2. **Navigate to the directory:**
   ```bash
   cd crypto-soft-ui
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the neumorphic shadows or adding new features, feel free to fork the repo and create a pull request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed with ❤️ by Sam**
*Lead UI/UX Engineer*