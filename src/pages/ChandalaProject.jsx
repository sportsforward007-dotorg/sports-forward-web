import React from 'react';
import ProjectGallery from './ProjectGallery';

const ChandalaProject = () => {
  const projectData = {
    title: "Chandala Project",
    category: "Sports Recreation Area",
    description: "A visual journey of transforming a tribal village into a sports haven",
    fullDescription: "This project was a partnership between Sports Forward and three classmates (James Wernikoff, Tate Cohen, and William Edwards). We fundraised to build a sports recreational area in a tribal village called Chandala, near the small town Ghadchiroli, India.",
    location: "Chandala, Ghadchiroli",
    year: "2024",
    impact: "500+ Kids",
    gofundme: "https://www.gofundme.com/f/sports-recreation-area-in-chandala-india",
    highlights: [
      {
        icon: "🏐",
        title: "Volleyball Court",
        description: "Built a full-sized volleyball court with proper markings and net installations, providing a professional space for sports and community gatherings."
      },
      {
        icon: "🤼",
        title: "Kabaddi Court",
        description: "Created a traditional kabaddi court, preserving local sports culture while promoting physical fitness and traditional games."
      },
      {
        icon: "💡",
        title: "Lighting Infrastructure",
        description: "Installed comprehensive lighting systems to enable evening sports activities, extending playtime and community engagement hours."
      },
      {
        icon: "🌱",
        title: "Area Maintenance",
        description: "Comprehensive gardening, painting, and land flattening to create a safe, beautiful, and functional recreational space for the entire community."
      }
    ],
    additionalInfo: [
      "Chandala is a village that lacks basic needs and is filled with Naxalites (those distrustful of the government). The sports recreational area included a volleyball court, a kabaddi court, lighting, sports equipment, and some maintenance of the area (gardening, painting, and flattening the entire area).",
      "This project represents more than just a sports facility—it's a symbol of hope and unity for a community that has long been marginalized. Through the power of sports, we're helping bridge divides and create opportunities for the next generation."
    ],
    images: [
  {
    url: "/images/projects/chandala/chandala-main.jpg",
    caption: "The completed sports recreation area in Chandala"
  },
  {
    url: "/images/homepage/mission-section.png",
    caption: "School children in Chandala near Ghadchiroli"
  },
  {
    url: "/images/homepage/hero-banner.png",
    caption: "Children watching the building of new sports field"
  }
]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default ChandalaProject;