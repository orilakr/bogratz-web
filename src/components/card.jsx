import React from 'react';

const Card = ({ children, className }) => (
    <div className={`card ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className }) => (
    <div className={`card-header ${className}`}>
        {children}
    </div>
);

const CardTitle = ({ children, className }) => (
    <h2 className={`card-title ${className}`}>
        {children}
    </h2>
);

const CardContent = ({ children, className }) => (
    <div className={`card-content ${className}`}>
        {children}
    </div>
);

export { Card, CardHeader, CardTitle, CardContent };