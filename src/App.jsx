import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Home as HomeIcon,
  Play,
  MapPin,
  Instagram,
  Calendar
} from "lucide-react";
import Events from './Pages/Events.jsx'
import Home from './Pages/Home.jsx'
import Photos from './Pages/Photos.jsx'
import Videos from './Pages/Videos.jsx'
import Directions from './Pages/Directions.jsx'



const navigationItems = [
  {
    title: "דף הבית",
    icon: HomeIcon,
    url: "/",
    component: Home,
  },
  {
    title: "סרטונים",
    icon: Play,
    url: "/videos",
    component: Videos,
  },
  {
    title: "הגעה לישיבה",
    icon: MapPin,
    url: "/location",
    component: Directions,
  },
  {
    title: "תמונות",
    icon: Instagram,
    url: "/photos",
    component: Photos,
  },
  {
    title: "לוח אירועים",
    icon: Calendar,
    url: "/events",
    component: Events
  },
];


function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-yeshiva-primary text-center">
              ישיבת צל"ש לבוגרי צבא ברעננה
            </h1>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive
                      ? 'bg-yeshiva-primary text-white shadow-lg'
                      : 'text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white'
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/40 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-yeshiva-primary font-medium mb-2">
              בוגר"צ רעננה
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default App
