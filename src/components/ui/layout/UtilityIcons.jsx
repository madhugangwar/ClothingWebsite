// Component: UtilityIcons (Simulated: src/components/layout/UtilityIcons.jsx)

import { useState,useEffect } from "react";
const UtilityIcons = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsVisible(scrollTop > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* WhatsApp Icon (Accent Yellow/Info color) */}
            <a 
                href="https://wa.me/919876543210" 
                className="btn bg-info rounded-circle shadow-lg p-3 whatsapp-icon text-primary" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
            >
                <i className="bi bi-whatsapp h4 m-0"></i>
            </a>

            {/* Back to Top Icon (Primary Blue) */}
            <button 
                className={`btn btn-primary rounded-circle shadow-lg p-3 back-to-top-icon ${isVisible ? 'visible' : 'hidden'}`}
                onClick={scrollToTop}
                title="Go to Top"
            >
                <i className="bi bi-arrow-up h4 m-0"></i>
            </button>
        </>
    );
};

export default UtilityIcons;
