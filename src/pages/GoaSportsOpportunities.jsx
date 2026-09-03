import React from 'react';
import ProjectGallery from './ProjectGallery';

const GoaSportsOpportunities = () => {
  const projectData = {
    title: "Goa Sports Opportunities",
    category: "Sports Infrastructure & Equipment",
    description: "Provided students with access to a new volleyball court, badminton sets, yoga mats, and additional sports resources, creating a dedicated space for physical activity, teamwork, and athletic development.",
    location: "Goa, India",
    year: "2024",
    impact: "New volleyball court and expanded sports access",
    highlights: [
      {
        icon: "🏐",
        title: "Volleyball Court",
        description: "Newly constructed volleyball court providing dedicated space for team sports and physical education."
      },
      {
        icon: "🏸",
        title: "Badminton Sets",
        description: "Complete badminton equipment including nets, rackets, and shuttlecocks for recreational play."
      },
      {
        icon: "🧘",
        title: "Yoga Mats",
        description: "Yoga mats for mindfulness, flexibility, and holistic physical development activities."
      },
      {
        icon: "🎯",
        title: "First Sports Access",
        description: "Students now have access to organized sports facilities and equipment for the first time."
      }
    ],
    images: [
      {
        url: "/images/projects/goa hegde/PHOTO-2026-06-25-23-35-33.jpg",
        caption: "New volleyball court in Goa"
      },
      {
        url: "/images/projects/goa hegde/PHOTO-2026-06-25-23-35-33 (1).jpg",
        caption: "Students playing volleyball on the new court"
      },
      {
        url: "/images/projects/goa hegde/PHOTO-2026-06-25-23-35-33 (2).jpg",
        caption: "Volleyball court and sports facilities"
      },
      {
        url: "/images/projects/goa hegde/PHOTO-2026-06-25-23-35-33 (3).jpg",
        caption: "Sports activities and equipment in Goa"
      },
      {
        url: "/images/projects/goa hegde/PHOTO-2026-08-05-17-58-27.jpg",
        caption: "Additional sports resources and activities"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default GoaSportsOpportunities;