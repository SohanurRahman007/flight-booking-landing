# Flight Booking Landing Page - Next.js Technical Task

This project is a high-performance, dynamic flight search landing page developed for the **Junior Frontend Developer** role at Innovate Solution. It features a modern UI built with **Shadcn UI**, centralized state management with **PullState**, and secure API handling using Next.js Route Handlers.

## 🔗 Live Demo & Repository
- **Live Demo:** [flight-booking-landing.vercel.app](https://flight-booking-landing.vercel.app/)
- **GitHub Repository:** [SohanurRahman007/flight-booking-landing](https://github.com/SohanurRahman007/flight-booking-landing)

## 🚀 Key Features

* **Modern UI with Shadcn UI**: Utilized Shadcn UI (Radix UI + Tailwind CSS) for high-quality, accessible components like Dialogs, Popovers, and Inputs, ensuring a polished user experience.
* **Centralized State Management**: Integrated **PullState** to handle global state for airport suggestions and airline data, ensuring a "single source of truth" across components.
* **Dynamic Search & Filtering**: A functional flight search box with auto-suggestion and a dedicated search results page with sidebar filters (Price, Baggage, Stops).
* **Next.js Route Handlers**: Implemented a secure backend proxy in `app/api/flights/route.js` to protect sensitive credentials (`apikey` and `secretecode`) during data fetching.
* **Performance Optimization**: Utilized **Lazy Loading** (`next/dynamic`) for heavy components like the Search Box and Result Cards to ensure fast initial page loads.
* **Input Validation**: Strict validation for flight search (e.g., origin/destination mismatch, date requirements) for an enhanced user experience.

## 🛠️ Tech Stack

* **Framework**: Next.js 15+ (Latest App Router)
* **UI Library**: Shadcn UI & Tailwind CSS
* **State Management**: PullState
* **Icons**: Lucide React
* **API Integration**: REST API via Server-side Proxy
* **Deployment**: Vercel

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/flights/     # Secure API route handler
│   ├── search/          # Search Results Page (Dynamic)
│   └── page.js          # Main Landing Page
├── components/
│   ├── shared/          # Navbar, Footer, and Shared Layout components
│   └── ui/              # Shadcn components & Custom UI (BannerSection, etc.)
├── store/
│   └── FlightStore.js   # PullState store configuration
└── lib/                 # Shared utilities, API helpers, and Shadcn utils
