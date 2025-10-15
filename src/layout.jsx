import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Home,
    Play,
    MapPin,
    Instagram,
    Calendar
} from "lucide-react";

// function createPageUrl(pageName) {
//     const location = useLocation();
//     const { pathname } = location;
//     const url = `${pathname}/${pageName}`;
//     return url;
// }

// const navigationItems = [
//     {
//         title: "דף הבית",
//         url: createPageUrl("Home"),
//         icon: Home,
//     },
//     {
//         title: "סרטונים",
//         url: createPageUrl("Videos"),
//         icon: Play,
//     },
//     {
//         title: "הגעה לישיבה",
//         url: createPageUrl("Directions"),
//         icon: MapPin,
//     },
//     {
//         title: "תמונות",
//         url: createPageUrl("Photos"),
//         icon: Instagram,
//     },
//     {
//         title: "לוח אירועים",
//         url: createPageUrl("Events"),
//         icon: Calendar,
//     },
// ];

export default function Layout({ children, currentPageName }) {
    const location = useLocation();

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FDFDFB' }}>
            <style>
                {`
          :root {
            --yeshiva-bg: #FDFDFB;
            --yeshiva-primary: #6F6E2E;
            --yeshiva-accent: #CBA42B;
          }
          
          body {
            background-color: var(--yeshiva-bg);
          }
          
          .text-yeshiva-primary {
            color: var(--yeshiva-primary);
          }
          
          .text-yeshiva-accent {
            color: var(--yeshiva-accent);
          }
          
          .bg-yeshiva-primary {
            background-color: var(--yeshiva-primary);
          }
          
          .bg-yeshiva-accent {
            background-color: var(--yeshiva-accent);
          }
          
          .border-yeshiva-primary {
            border-color: var(--yeshiva-primary);
          }
          
          .border-yeshiva-accent {
            border-color: var(--yeshiva-accent);
          }
          
          .hover\\:bg-yeshiva-primary:hover {
            background-color: var(--yeshiva-primary);
          }
          
          .hover\\:text-yeshiva-accent:hover {
            color: var(--yeshiva-accent);
          }
        `}
            </style>

            {/* Header */}
            <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center py-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-yeshiva-primary text-center">
                            ישיבתנו הקדושה
                        </h1>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="border-b border-gray-200 bg-white/60 backdrop-blur-sm">
                <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white/40 backdrop-blur-sm mt-16">
                <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-yeshiva-primary font-medium mb-2">
                            היש
                        </p>
                        <p className="text-gray-600 text-sm">
                            © 2025 כל הזכויות שמורות
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}