import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const isFirstRender = useRef(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        window.dispatchEvent(new Event('warp'));

        const flash = document.createElement('div');
        flash.className = 'sonic-boom-flash';
        document.body.appendChild(flash);

        setTimeout(() => {
            flash.remove();
        }, 800);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
