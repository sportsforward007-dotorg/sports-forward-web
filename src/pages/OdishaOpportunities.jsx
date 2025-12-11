import React from 'react';
import ProjectGallery from './ProjectGallery';

const OdishaOpportunities = () => {
  const projectData = {
    title: "Odisha Opportunities",
    category: "Comprehensive Sports Equipment",
    description: "We completed our project in Odisha, India, delivering a comprehensive set of sports equipment to a high school in Rourkela that previously had no access to sports equipment.",
    location: "Rourkela, Odisha",
    year: "2024",
    impact: "450+ Students",
    highlights: [
      {
        icon: "🏐",
        title: "Volleyball Equipment",
        description: "Complete volleyball nets and balls for team sports and physical education."
      },
      {
        icon: "🏸",
        title: "Badminton Sets",
        description: "Badminton nets, rackets, and shuttlecocks for recreational play."
      },
      {
        icon: "⚾",
        title: "Various Sports Gear",
        description: "Bats, balls, and additional equipment for multiple sports activities."
      },
      {
        icon: "🎯",
        title: "First Equipment Access",
        description: "This school had zero access to any sports equipment before our donation."
      }
    ],
    images: [
      {
        url: "/sports-forward-web/images/projects/odisha/odisha-1.png",
        caption: "Sports equipment delivery in Rourkela"
      },
      {
        url: "/sports-forward-web/images/projects/odisha/odisha-2.png",
        caption: "Students receiving sports equipment"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default OdishaOpportunities;