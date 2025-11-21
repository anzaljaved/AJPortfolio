import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Anzal",
        fullName: "M Anzal Javed",
    },
    social: {
        github: "AnzalJaved",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Project Management and Team Collaborating System",
            description: "A full-stack project management platform that enables Scrum-style collaboration between Admins, Team Leaders, and Members. It simplifies sprint planning, task assignment, and team communication within a single company environment.",
            image: "/projects/TeamSphere.png",
            technologies: ["JavaScript" , "TypeScript", "Tailwind CSS", "PHP", "MySQL", "HTML"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Visual Note Taking Web App",
            description: "A web application that allows users to take notes and save them in a visual format in an infinite whiteboard. Features include adding notes, drag and drop, todos, and grouping notes under columns.",
            image: "/projects/SnapNote.png",
            technologies: ["HTML", "JavaScript" , "TypeScript"],
            github: "#",
            demo: "https://snapnote-by-anzal.netlify.app"
        },
        {
            id: 3,
            title: "Health Archive",
            description: "A unified digital Health Archive system that allows patients to carry a single ID to any hospital, enabling doctors to instantly access complete medical histories, prescriptions, and ongoing treatments. Designed with critical-condition indicators and real-time medication tracking, it ensures faster, safer, and more informed care across multiple healthcare providers.",
            image: "/projects/HealthArchive.png",
            technologies: ["JavaScript", "Tailwind CSS", "PHP", "MySQL", "HTML"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "2D Unity Game",
            description: "A 2D local multiplayer cat-themed platformer built using Unity and Cinemachine, featuring pixel art, dialogues, and mobile controls.",
            image: "/projects/Liora.png",
            technologies: ["Unity", "C#", "Cinemachine", "Pixel Art", "Mobile Controls"],
            github: "#",
            demo: "#"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "MongoDB", level: "Advanced" },
                { name: "Express.js", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Advanced" },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Frontend Developer",
            company: "SelectSkillSet",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            company: "Tekisky",
            period: "2023 - 2024",
            location: "Remote",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@anzaljaved",
            link: `https://github.com/anzaljaved`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "anzaljoffl@gmail.com",
            link: "mailto:anzaljoffl@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}