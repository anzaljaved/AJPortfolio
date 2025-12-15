import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Anzal",
        fullName: "M Anzal Javed",
        title: "BCA Student | Aspiring Software Developer",
        phone: "+91 7736709268",
        email: "anzaljoffl@gmail.com",
        location: "Kochi, Kerala, India",
        linkedin: "linkedin.com/in/m-anzal-javed",
        github: "github.com/anzaljaved"
    },
    social: {
        github: "AnzalJaved",
        linkedin: "m-anzal-javed"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, // Disable Spotify recent tracks
    
    // Executive Summary
    summary: "Final-year BCA student with hands-on experience in building web applications using JavaScript, PHP, and SQL. Currently learning the MERN stack while developing a strong foundation in software engineering concepts through academic projects and hackathons. Quick learner with a keen interest in backend and full-stack development.",
    
    // Projects Section
    projects: [
        {
            id: 1,
            title: "TeamSphere",
            description: "Developed a project management system enabling task assignment, Scrum workflow, sprints, and tracking progress. Implemented user authentication, team-based task visibility, and role-based access. Designed UI using HTML/CSS with responsive components for usability.",
            image: "/projects/TeamSphere.png",
            technologies: ["JavaScript", "PHP", "Tailwindcss","MySQL"],
            period: "MAY-SEPT 2025",
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Health Archive",
            description: "Built a CRUD-based patient management system for storing and retrieving medical records securely and implemented appointment booking functionality. Designed structured front-end UI with form validation and user-friendly layout.",
            image: "/projects/HealthArchive.png",
            technologies: ["PHP", "JavaScript", "MySQL"],
            period: "MARCH 2025",
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Snapnote",
            description: "Developed an interactive drag-and-drop system for sticky notes and to-do items. Added customizable features including color tagging, layout adjustments, and grouping feature for better visual organization. Currently building backend support for account-based saving and cross-device syncing (in progress).",
            image: "/projects/SnapNote.png",
            technologies: ["JavaScript", "HTML", "CSS"],
            period: "JAN 2025",
            github: "#",
            demo: "https://snapnote-by-anzal.netlify.app"
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

    // Achievements Section
    achievements: [
        {
            title: "24-Hour Hackathon Winner",
            date: "March 2025",
            description: "Winner of a 24-hour Hackathon conducted by MITS Kochi, where I led a team of 3 to design and build a functional software solution under time constraints."
        },
        {
            title: "UI Designing – Second Prize",
            date: "Dec 2024",
            description: "Secured 2nd place in UI Designing competition hosted by Sacred Hearts College. This recognition reflected my ability to understand user needs, design intuitive user interfaces."
        }
    ],

    // Technical Skills Section
    skills: [
        {
            title: "Languages",
            icon: <HiCode />,
            description: "Programming & Markup",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "JavaScript", level: "Advanced" },
                { name: "TypeScript", level: "Intermediate" },
                { name: "Python", level: "Intermediate" },
                { name: "C#", level: "Basic" },
                { name: "PHP", level: "Intermediate" },
                { name: "HTML/CSS", level: "Advanced" }
            ]
        },
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Web Development",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "React", level: "Intermediate" },
                { name: "Tailwind CSS", level: "Intermediate" },
                { name: "HTML5", level: "Advanced" },
                { name: "CSS3", level: "Advanced" }
            ]
        },
        {
            title: "Backend & Databases",
            icon: <HiDatabase />,
            description: "Server & Data Management",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Intermediate" },
                { name: "Express.js", level: "Intermediate" },
                { name: "MySQL", level: "Intermediate" },
                { name: "MongoDB", level: "Basic" },
                { name: "REST APIs", level: "Intermediate" }
            ]
        },
        {
            title: "Tools & DevOps",
            icon: <HiCube />,
            description: "Development & Deployment",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Git", level: "Intermediate" },
                { name: "GitHub", level: "Intermediate" },
                { name: "AWS", level: "Basic" },
                { name: "Netlify", level: "Intermediate" },
                { name: "Version Control", level: "Intermediate" }
            ]
        }
    ],

    // Education Section
    education: [
        {
            degree: "Bachelor of Computer Application (BCA)",
            institution: "St. Thomas Arts & Science College",
            period: "2023 - 2026",
            description: "CGPA - 8.22 (First 4 Semesters)",
            location: "Kerala, India"
        }
    ],

    // Contact Information
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "anzaljoffl@gmail.com",
            link: "mailto:anzaljoffl@gmail.com"
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "github.com/anzaljaved",
            link: "https://github.com/anzaljaved"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Kochi, Kerala, India",
            link: null
        }
    ]
}