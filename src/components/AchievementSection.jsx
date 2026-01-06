import { Award, Zap, Trophy, Shield } from "lucide-react";

export const AchievementSection = () => {
    const achievements = [
        {
            id: 1,
            title: "Certified Expert",
            description: "Multiple cloud certifications from AWS and Google Cloud",
            icon: <Award className="w-8 h-8 text-blue-400" />,
            color: "bg-blue-500/10 border-blue-500/20",
        },
        {
            id: 2,
            title: "Top Performer",
            description: "Consistently delivered projects ahead of schedule with 99% uptime",
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            color: "bg-yellow-500/10 border-yellow-500/20",
        },
        {
            id: 3,
            title: "Innovation Leader",
            description: "Pioneered AI integration in legacy systems resulting in 40% efficiency gain",
            icon: <Trophy className="w-8 h-8 text-purple-400" />,
            color: "bg-purple-500/10 border-purple-500/20",
        },
        {
            id: 4,
            title: "Security Focused",
            description: "Implemented robust security protocols ensuring zero data breaches",
            icon: <Shield className="w-8 h-8 text-green-400" />,
            color: "bg-green-500/10 border-green-500/20",
        },
    ];

    const certifications = [
        {
            id: 1,
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "AWS Academy",
            date: "Nov 2025",
            image: "/certificates/aws-academy.png",
            url: "https://www.credly.com/go/G1YmaA0a", // You can update with actual link if available or remove
        },
        {
            id: 2,
            title: "Hashgraph Developer Course",
            issuer: "The Hashgraph Association",
            date: "Nov 2025",
            image: "/certificates/hashgraph.png",
            url: "#",
        },
        {
            id: 3,
            title: "Fundamentals of Deep Learning",
            issuer: "NVIDIA",
            date: "March 2025",
            image: "/certificates/nvidia.png",
            url: "#",
            fullWidth: true // Flag to style differently if needed, e.g., Nvidia cert which is portrait
        },
    ];

    return (
        <section id="achievements" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                {/* Achievements Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Achievements & <span className="text-primary">Recognition</span>
                </h2>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {achievements.map((item) => (
                        <div
                            key={item.id}
                            className={`p-6 rounded-xl border backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 ${item.color} flex items-start gap-4`}
                        >
                            <div className="p-3 bg-background/50 rounded-lg">{item.icon}</div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications Header */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">Certifications</span>
                </h2>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-white/5">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-[3.5rem]">{cert.title}</h3>
                                <div className="flex justify-between items-center text-sm text-muted-foreground">
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>

                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-4 w-full block text-center py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
