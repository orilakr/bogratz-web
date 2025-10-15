import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Play, MapPin, Instagram, Calendar } from "lucide-react";
import Events from './Pages/Events.jsx'
import Home from './Pages/Home.jsx'
import Photos from './Pages/Photos.jsx'
import Videos from './Pages/Videos.jsx'
import Directions from './Pages/Directions.jsx'
import './App.css';
import './index.css';

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
    url: "videos",
    component: Videos,
  },
  {
    title: "הגעה לישיבה",
    icon: MapPin,
    url: "location",
    component: Directions,
  },
  {
    title: "תמונות",
    icon: Instagram,
    url: "photos",
    component: Photos,
  },
  {
    title: "לוח אירועים",
    icon: Calendar,
    url: "events",
    component: Events
  },
];

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-yeshiva-primary text-center">
              ישיבת צל"ש לבוגרי צבא ברעננה
            </h1>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  // hover:bg-yeshiva-accent
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${location.pathname === item.url ? 'bg-yeshiva-primary text-white shadow-lg' : 'text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white'}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/location" element={<Directions />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>


  );
}

export default App;