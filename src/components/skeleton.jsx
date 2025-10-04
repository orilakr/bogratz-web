import React, { useState, useEffect } from 'react';

const Skeleton = ({ children, className }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className={`skeleton ${className}`}>
                <div className="h-4 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-4 mt-2 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="h-4 mt-2 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
        );
    }

    return <div className={className}>{children}</div>;
};

export { Skeleton };