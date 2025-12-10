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
        url: "https://static.wixstatic.com/media/c9c221_2c66230f965445f0a3e69f219aa46ace~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/884c4310-8187-41f0-b04d-80d1bed7b9c3.jpg",
        caption: "The completed sports recreation area in Chandala"
      },
      {
        url: "https://static.wixstatic.com/media/c9c221_8f57dc5de0f544388e55f500c0356c25~mv2.png/v1/fill/w_800,h_600,al_c,q_85/2b9029e0-360b-4813-9e63-d881f7c50fe4_heic.png",
        caption: "School children in Chandala near Ghadchiroli"
      },
      {
        url: "https://static.wixstatic.com/media/c9c221_25d2612ff0ab46d58135224e86802a77~mv2.png/v1/fill/w_800,h_600,al_c,q_85/Screen%20Shot%202024-01-21%20at%201_37_08%20AM.png",
        caption: "Children watching the building of new sports field"
      },
      {
        url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop",
        caption: "Community members celebrating the new facility"
      },
      {
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
        caption: "Children playing volleyball for the first time"
      },
      {
        url: "https://images.unsplash.com/photo-1529796544360-3bb6bde5ad99?w=800&h=600&fit=crop",
        caption: "Kabaddi court in use during evening hours"
      },
      {
        url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=600&fit=crop",
        caption: "Lighting installation for evening sports activities"
      },
      {
        url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
        caption: "Traditional kabaddi game in progress"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default ChandalaProject;