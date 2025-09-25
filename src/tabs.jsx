import React from 'react';

// Helper component for the tab content
const TabContent = ({ children }) => (
    <div className="tab-content bg-base-100 p-8 rounded-b-xl border-t-2 border-primary-content">
        {children}
    </div>
);

// Tabs component receives props for active tab and click handler
const Tabs = ({ activeTab, setActiveTab }) => {
    const renderTabContent = () => {
        switch (activeTab) {
            case 'tab1':
                return (
                    <TabContent>
                        <h2 className="text-3xl font-bold mb-4">Content for Tab 1</h2>
                        <p>info</p>
                    </TabContent>
                );
            case 'tab2':
                return (
                    <TabContent>
                        <h2 className="text-3xl font-bold mb-4">Content for Tab 2</h2>
                        <p>info</p>
                    </TabContent>
                );
            case 'tab3':
                return (
                    <TabContent>
                        <h2 className="text-3xl font-bold mb-4">Content for Tab 3</h2>
                        <p>info</p>
                    </TabContent>
                );
            case 'tab4':
                return (
                    <TabContent>
                        <h2 className="text-3xl font-bold mb-4">Content for Tab 4</h2>
                        <p>info</p>
                    </TabContent>
                );
            case 'tab5':
                return (
                    <TabContent>
                        <h2 className="text-3xl font-bold mb-4">Content for Tab 4</h2>
                        <p>info</p>
                    </TabContent>
                );
            default:
                return null;
        }
    };

    return (
        <main className="flex-1 p-8 overflow-auto">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-primary-content">Welcome to the Dashboard</h1>
            <div className="flex flex-col space-y-4">
                {/* Tab buttons */}
                <div className="flex justify-center w-full">
                    <div role="tablist" className="tabs tabs-boxed rounded-xl shadow-xl">
                        <a role="tab" className={`tab text-lg font-semibold ${activeTab === 'tab1' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab1')}>Tab 1</a>
                        <a role="tab" className={`tab text-lg font-semibold ${activeTab === 'tab2' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab2')}>Tab 2</a>
                        <a role="tab" className={`tab text-lg font-semibold ${activeTab === 'tab3' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab3')}>Tab 3</a>
                        <a role="tab" className={`tab text-lg font-semibold ${activeTab === 'tab4' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab4')}>Tab 4</a>
                        <a role="tab" className={`tab text-lg font-semibold ${activeTab === 'tab5' ? 'tab-active' : ''}`} onClick={() => setActiveTab('tab5')}>Tab 5</a>
                    </div>
                </div>
                {/* Tab content */}
                {renderTabContent()}
            </div>
        </main>
    );
};

export default Tabs;
