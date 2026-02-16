import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        let stars = [];
        let animationFrameId;
        let warpMode = false;
        let warpTimer = 0;
        const WARP_DURATION = 50;

        const createStar = (randomZ) => {
            const maxZ = 1000;
            return {
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: randomZ ? Math.random() * maxZ : maxZ + Math.random() * 200,
                speed: 0.15 + Math.random() * 0.85
            };
        };

        const init = () => {
            resize();
            stars = [];
            for (let i = 0; i < 800; i++) {
                stars.push(createStar(true));
            }
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const DPR = Math.max(1, window.devicePixelRatio || 1);
            canvas.width = Math.floor(width * DPR);
            canvas.height = Math.floor(height * DPR);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };

        const triggerWarp = () => {
            warpMode = true;
            warpTimer = WARP_DURATION;
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            let speedMultiplier = 1;
            if (warpMode) {
                warpTimer--;
                const progress = 1 - (warpTimer / WARP_DURATION);
                if (progress < 0.4) {
                    speedMultiplier = 1 + (progress / 0.4) * 25;
                } else if (progress < 0.7) {
                    speedMultiplier = 26;
                } else {
                    speedMultiplier = 26 * (1 - ((progress - 0.7) / 0.3));
                    speedMultiplier = Math.max(1, speedMultiplier);
                }
                if (warpTimer <= 0) warpMode = false;
            }

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.z -= star.speed * speedMultiplier;

                if (star.z <= 0) {
                    stars[i] = createStar(false);
                    continue;
                }

                const x = (star.x / star.z) * width / 2 + cx;
                const y = (star.y / star.z) * height / 2 + cy;

                if (x < -10 || x > width + 10 || y < -10 || y > height + 10) {
                    stars[i] = createStar(false);
                    continue;
                }

                const closeness = 1 - star.z / 1000;
                const alpha = 0.05 + closeness * 0.95;
                const radius = Math.max(0.2, closeness * 2.5);

                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();

                const trailThreshold = warpMode ? 0.3 : 1.5;
                if (radius > trailThreshold || (warpMode && speedMultiplier > 5)) {
                    const trailLen = warpMode ? speedMultiplier * 3 : 10;
                    const prevX = (star.x / (star.z + trailLen)) * width / 2 + cx;
                    const prevY = (star.y / (star.z + trailLen)) * height / 2 + cy;
                    const trailAlpha = warpMode ? Math.min(0.8, alpha * 0.6) : alpha * 0.3;
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(70, 163, 255, " + trailAlpha + ")";
                    ctx.lineWidth = warpMode ? Math.max(0.5, radius * 1.2) : radius * 0.8;
                    ctx.moveTo(x, y);
                    ctx.lineTo(prevX, prevY);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('warp', triggerWarp);
        init();
        animate();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('warp', triggerWarp);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="particleCanvas" aria-hidden="true" />;
};

export default ParticleBackground;
