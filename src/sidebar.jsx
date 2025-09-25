import React from 'react';

// Sidebar component receives props for active tab and click handler
const Sidebar = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="w-64 bg-base-200 shadow-xl flex flex-col p-4 rounded--2xl">
            <img className="p-4 text-center text-2xl font-bold text-primary" src="./src/assets/text-logo.png" alt="Logo"></img>
            <ul className="menu p-4 w-full">
                <li>
                    {/* https://www.flaticon.com/authors/chillicolor */}
                    <a onClick={() => setActiveTab('tab1')} className={`flex items-center space-x-2 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 ${activeTab === 'tab1' ? 'bg-primary text-white' : ''}`}>
                        <img src="./src/assets/open-book.png" alt="Home Icon" className="h-6 w-6" />
                        <span>בית</span>
                    </a>
                </li>
                <li>
                    {/* https://www.flaticon.com/authors/zlatko-najdenovski */}
                    <a onClick={() => setActiveTab('tab2')} className={`flex items-center space-x-2 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 ${activeTab === 'tab2' ? 'bg-primary text-white' : ''}`}>
                        <img src="./src/assets/navigate.png" alt="Navigation Icon" className="h-6 w-6" />
                        <span>ניווט</span>
                    </a>
                </li>
                <li>
                    {/* https://www.flaticon.com/authors/swifticons */}
                    <a onClick={() => setActiveTab('tab3')} className={`flex items-center space-x-2 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 ${activeTab === 'tab3' ? 'bg-primary text-white' : ''}`}>
                        <img src="./src/assets/youtube.png" alt="Videos Icon" className="h-6 w-6" />
                        <span>שיעורים</span>
                    </a>
                </li>
                <li>
                    {/* https://www.flaticon.com/authors/Freepik */}
                    <a onClick={() => setActiveTab('tab4')} className={`flex items-center space-x-2 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 ${activeTab === 'tab4' ? 'bg-primary text-white' : ''}`}>
                        <img src="./src/assets/gallery.png" alt="Gallery Icon" className="h-6 w-6" />
                        <span>גלריה</span>
                    </a>
                </li>
                <li>
                    {/* https://www.flaticon.com/authors/Freepik */}
                    <a onClick={() => setActiveTab('tab4')} className={`flex items-center space-x-2 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200 ${activeTab === 'tab4' ? 'bg-primary text-white' : ''}`}>
                        <img src="./src/assets/calendar.png" alt="Gallery Icon" className="h-6 w-6" />
                        <span>ארועים</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
