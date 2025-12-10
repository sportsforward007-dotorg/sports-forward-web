import React from 'react';
import ProjectGallery from './ProjectGallery';

const CheckmateForChange = () => {
  const projectData = {
    title: "Checkmate for Change",
    category: "Chess Education Program",
    description: "We brought the joy of chess to kids in low-income families in Nagpur, India. After engaging with students and the principal of Channulal Navin Vidya Bhavan High School, we created a comprehensive chess program that transformed young minds.",
    location: "Nagpur",
    year: "2024",
    impact: "300+ Students",
    highlights: [
      {
        icon: "♟️",
        title: "Chess Sets Donated",
        description: "Multiple chess sets provided to the school, ensuring every student has access to the game."
      },
      {
        icon: "👨‍🏫",
        title: "Year-Round Teacher",
        description: "Provided a dedicated chess teacher for the entire year to ensure consistent learning and development."
      },
      {
        icon: "🏆",
        title: "Four Tournaments",
        description: "Organized four competitive tournaments throughout the year to encourage skill development."
      },
      {
        icon: "🎓",
        title: "Scholarships",
        description: "Offered scholarships to tournament winners, rewarding excellence and encouraging participation."
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800",
        caption: "Students learning chess fundamentals"
      },
      {
        url: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800",
        caption: "Chess tournament at Channulal Navin Vidya Bhavan"
      },
      {
        url: "https://images.unsplash.com/photo-1561133143-82a8c52d6c3c?w=800",
        caption: "Students engaged in a competitive match"
      },
      {
        url: "https://images.unsplash.com/photo-1594996082668-c7919c7dd600?w=800",
        caption: "Young chess players concentrating on strategy"
      },
      {
        url: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800",
        caption: "Group chess lesson in progress"
      },
      {
        url: "https://images.unsplash.com/photo-1611195974226-ef4a59e77e6b?w=800",
        caption: "Chess sets donated to the school"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default CheckmateForChange;