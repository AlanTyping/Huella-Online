"use client";

import { useEffect, useRef } from "react";

export function GraffitiBackground() {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const ctx = context;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const points = Array.from({ length: 18 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
        }));

        function animate() {
            if (!canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const p of points) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255,165,0,0.25)";
                ctx.fill();

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            }

            requestAnimationFrame(animate);
        }

        animate();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            ref={ref}
            className="absolute inset-0 z-10 opacity-30 pointer-events-none"
        />
    );
}