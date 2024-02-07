import React, { useEffect } from 'react';
import './RightSide.scss';

export default function RightSide() {
    useEffect(() => {
        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Designer";
            }, 8000); 
        }

        textLoad();
        setInterval(textLoad, 12000);

        // Clean-up function for useEffect (optional)
        return () => clearInterval(textLoad);
    }, []); // empty dependency array means it runs only once after initial render

    return (
        <header className='right-side'>
            <div className='RightSide__container'>
                <div className="container">
                    <span className="text first-text">I'm a</span>
                    <span className="text sec-text"></span>
                </div>
            </div>
        </header>
    );
}