import React from 'react';

const Button = ({ children, className, onClick }) => (
    <button className={`button ${className}`} type="button" onClick={onClick}>
        {children}
    </button>
);

export { Button };