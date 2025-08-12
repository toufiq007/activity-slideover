# Create Activity Drawer

A Next.js application implementing a right-side slide-in panel (drawer) to create activities, following the provided Figma design.

## 📌 Task Description

This project is based on a given Figma design. The design contains a **"Create Activity"** button.  
When clicked, a panel slides in from the right side of the screen, containing a form that matches the design exactly.

The layout and styling are consistent across **small laptop**, **medium**, and **large** screen sizes.  
(No mobile/tablet responsiveness was required.)

## 🎯 Features

- **Right-side slide-over panel (Drawer)** using shadcn's `Sheet` component
- Pixel-perfect design matching the provided Figma
- Clean, modular, and reusable components
- Desktop-friendly breakpoints and consistent styling
- Smooth animations and accessible interactions (keyboard + screen reader)
- Built with modern Next.js 14, Tailwind CSS, and Shadcn

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) – App Router
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Shadcn/UI](https://ui.shadcn.com/) – UI components
- [TypeScript](https://www.typescriptlang.org/) – Static typing

## 📂 Project Structure

```
app/
├── page.js # Main entry page
└── layout.js # Root layout

components/
├── common/ # Custom reusable form components
│ ├── CustomSelect.jsx
│ └── CustomSwitchInput.jsx
│
├── ui/ # Shadcn UI components
│ └── ... # Prebuilt UI elements
│
├── AppSidebar.jsx # Sidebar navigation
├── BookingForm.jsx # Activity creation form
├── Dashboard.jsx # Home dashboard
├── MainContent.jsx # Main content area with "Create Activity" button
└── Navbar.jsx # Top navigation bar

lib/
└── demolist.js # Demo data for select components
```

## 🚀 Getting Started

### 1. Clone the Repository

```
bash
git clone https://github.com/toufiq007/activity-slideover
cd <activity-slideover>
```

### 2. Install Dependencies

```
npm install
# or
yarn install
```

### 3. Run the Development Server

```
npm run dev
# or
yarn dev
```
