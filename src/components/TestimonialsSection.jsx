import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Emily Rodriguez",
        role: "Project Manager at DevCo",
        image: "/avatars/user1.png", // Use a placeholder or generic avatar
        content: "Mohamed's communication skills and technical expertise make him an invaluable team member. Highly recommended!",
        rating: 5,
    },
    {
        id: 2,
        name: "John Doe",
        role: "Senior Developer",
        image: "/avatars/user2.png",
        content: "An exceptional developer who consistently delivers high-quality code. His problem-solving abilities are top-notch.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah Smith",
        role: "CTO at TechStart",
        image: "/avatars/user3.png",
        content: "Working with Mohamed was a pleasure. He brings innovative ideas to the table and executes them flawlessly.",
        rating: 5,
    },
];

export const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    What People <span className="text-primary"> Say</span>
                </h2>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 md:block hidden"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 md:block hidden"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <div className="bg-card/50 backdrop-blur-md border border-primary/10 rounded-2xl p-8 md:p-12 relative shadow-lg">
                                    {/* Background Quote Icon */}
                                    <div className="absolute top-6 right-8 opacity-5">
                                        <Quote size={80} />
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                        {/* Avatar */}
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 bg-secondary">
                                            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-muted-foreground bg-secondary">
                                                {testimonials[currentIndex].name.charAt(0)}
                                            </div>
                                            {/* <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-full h-full object-cover" /> */}
                                        </div>

                                        <div className="flex-1 text-center md:text-left space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                                                <p className="text-sm text-primary">{testimonials[currentIndex].role}</p>
                                            </div>

                                            <div className="flex justify-center md:justify-start gap-1">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>

                                            <p className="text-muted-foreground text-lg italic relative z-10">
                                                "{testimonials[currentIndex].content}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full h-3 ${index === currentIndex ? "w-8 bg-primary" : "w-3 bg-primary/20 hover:bg-primary/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
