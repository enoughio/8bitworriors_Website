"use client";
import TeamMember from "./TeamMember";

const allTeamMembers = [
    {
        name: "Harsh Gautam",
        role: "Founder",
        image: "/Team/founder.png",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aman Kumar Verma",
        role: "Tech Lead",
        image: "/Team/aman.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        }, 
    },
    {
        name: "Vaidehi Verma",
        role: "Tech team",
        image: "/Team/vaidehi.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Abhishek Kumar",
        role: "Treasurer",
        image: "/Team/savi.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rewat Singh Pawar",
        role: "Event Management Lead",
        image: "/Team/REVAT SINGH PAWAR.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rajveer Singh Parmar",
        role: "Creative Team",
        image: "/Team/RAJVEER SINGH PARMAR.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Radhika Thakur",
        role: "Content Team",
        image: "/Team/radhika.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Manshvi Jaiswal",
        role: "Marketing Team",
        image: "/Team/MANSHVI JAISWAL.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Kanchan Kushwaha",
        role: "Reasearch and Development",
        image: "/Team/KANCHAN KUSHWAHA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aditi Patel",
        role: "President",
        image: "/Team/president.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Abhishek Parihar",
        role: "Tech Team",
        image: "/Team/abhishek parihar.png",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Soumya Singh",
        role: "Tech team",
        image: "/Team/Soumya.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Muskan Vishwakarma",
        role: "Social Media Lead",
        image: "/Team/MUSKAN VISHWAKARMA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Saransh Tiwari",
        role: "Event Management Team",
        image: "/Team/SARANSH TIWARI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Ayushman Gupta",
        role: "Creative Team",
        image: "/Team/Ayushman.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aditya Rai",
        role: "Marketing Lead",
        image: "/Team/ADITYA RAI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Abhishek Goswami",
        role: "Graphic Team",
        image: "/Team/ABHISHEK GOSWAMI.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Twinkle Kasera",
        role: "Research and Developemnt",
        image: "/Team/TWINKLE KASERA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Peeyush Shandilya",
        role: "Secretary",
        image: "/Team/secretary.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Aniket Jatav",
        role: "Tech team",
        image: "/Team/aniket.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Sarvagya Sharma",
        role: "VideoGrapher",
        image: "/Team/SARVAGYA SHARMA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Ronak Gupta",
        role: "Social Media Team",
        image: "/Team/RONAK GUPTA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Rishi Vasistha",
        role: "Creative Head",
        image: "/Team/RISHI VASISTHA.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Kritika Mittal",
        role: "Content Team",
        image: "/Team/KRITIKA MITTAL.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Divyanshu Singh Chauhan",
        role: "MArketing Team",
        image: "/Team/DIVYANSHU SINGH CHAUHAN.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    {
        name: "Charu Jain",
        role: "Graphic Team",
        image: "/Team/CHARU JAIN.jpg",
        socialLinks: {
            instagram: "#",
            github: "#",
            linkedin: "#",
        },
    },
    
    
];

const AllTeamMembers = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-5">
            <h1 className="text-5xl font-extrabold text-center text-white pb-10">
                Our Core Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {allTeamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default AllTeamMembers;