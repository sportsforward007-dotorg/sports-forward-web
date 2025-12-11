import React from 'react';
import ProjectGallery from './ProjectGallery';

const ArcheryForAll = () => {
  const projectData = {
    title: "Archery for All",
    category: "Archery Equipment Donation",
    description: "We brought the excitement of archery to kids in rural areas of Punjab. This project introduced students to archery for the first time, complete with safety equipment and professional guidance.",
    location: "Chak Mochanwala, Punjab",
    year: "2024",
    impact: "150+ Students",
    highlights: [
      {
        icon: "🎯",
        title: "Archery Sets",
        description: "Complete archery sets donated to enable students to learn and practice this skill sport."
      },
      {
        icon: "🛡️",
        title: "Safety Equipment",
        description: "Essential safety equipment provided to ensure safe practice and learning environment."
      },
      {
        icon: "🎨",
        title: "Target Boards",
        description: "Professional target boards installed for proper training and skill development."
      },
      {
        icon: "👨‍🏫",
        title: "First Access",
        description: "First time students in this rural area have access to archery as a sport."
      }
    ],
    images: [
      {
        url: "/images/projects/archery/archery-1.png",
        caption: "Archery equipment donation"
      },
      {
        url: "/images/projects/archery/archery-2.png",
        caption: "Student with archery equipment"
      },
      {
        url: "/images/projects/archery/archery-3.png",
        caption: "Archery practice session"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default ArcheryForAll;