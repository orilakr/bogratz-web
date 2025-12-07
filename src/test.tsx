import React, { useState } from 'react';
// Import the Button component from shadcn/ui
import { Button } from '@/components/ui/button';

// We'll use a simple Tailwind-based class for the main container
// The class names are passed directly to the JSX elements.

const SimpleCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        // 1. Container Styling (Tailwind Classes)
        <div className="
      p-8 max-w-sm mx-auto bg-white rounded-xl shadow-2xl space-y-6
      text-center border border-gray-100 dark:bg-gray-800 dark:border-gray-700
    ">

            {/* 2. Title */}
            <h2 className="text-3xl font-extrabold text-green-900 dark:text-gray-100">
                🚀 Tailwind Counter
            </h2>

            {/* 3. Count Display */}
            <div className="
        text-6xl font-black 
        text-primary 
        dark:text-indigo-400
      ">
                {count}
            </div>

            {/* 4. Action Buttons (Using shadcn/ui Button) */}
            <div className="flex justify-center space-x-4">

                {/* Increment Button */}
                <Button
                    onClick={handleIncrement}
                    // Uses the default 'default' variant, but we override the color with Tailwind
                    className="bg-green-600 hover:bg-green-700 text-white shadow-lg"
                    size="lg"
                >
                    Increase (+)
                </Button>

                {/* Decrement Button */}
                <Button
                    onClick={handleDecrement}
                    // Uses the 'destructive' variant for a red color from shadcn/ui
                    variant="destructive"
                    size="lg"
                >
                    Decrease (-)
                </Button>
            </div>

            {/* 5. Reset Button */}
            <div className="pt-2">
                <Button
                    onClick={handleReset}
                    variant="outline"
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default SimpleCounter;   