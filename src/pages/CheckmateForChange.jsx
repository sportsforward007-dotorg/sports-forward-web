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
    url: "/sports-forward-web/images/projects/chess/gallery/chess-1.png",
    caption: "Chess sets and students at Channulal Navin Vidya Bhavan"
  },
  {
    url: "/sports-forward-web/images/projects/chess/gallery/chess-2.png",
    caption: "Students engaged in chess tournament"
  }
]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default CheckmateForChange;