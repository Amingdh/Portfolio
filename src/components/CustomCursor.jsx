import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);

            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
            );
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full bg-primary/20 backdrop-blur-xs border border-primary/50 mix-blend-screen transition-transform duration-200 ease-out custom-cursor`}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                scale: isPointer ? 1.5 : 1,
            }}
        >
            <div className="w-2 h-2 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_2px_var(--primary)]" />
        </motion.div>
    );
};
