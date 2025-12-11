import React from 'react';
import ProjectGallery from './ProjectGallery';

const HoopsForGrowth = () => {
  const projectData = {
    title: "Hoops for Growth",
    category: "Basketball Program",
    description: "Our first sports initiative at Modern Public School, Tarikhet, where we successfully introduced an organized sports program for the very first time. While the community was aware of sports, there had never been a formal opportunity for students to engage in them.",
    location: "Tarikhet",
    year: "2024",
    impact: "200+ Students",
    highlights: [
      {
        icon: "🏀",
        title: "Basketball Equipment",
        description: "Provided complete basketball equipment including hoops, balls, and training gear for organized play."
      },
      {
        icon: "📚",
        title: "First Sports Program",
        description: "Established the school's very first formal sports program, creating a new chapter in their education."
      },
      {
        icon: "💪",
        title: "Physical Development",
        description: "Enabled children to pursue their passion and foster physical development through organized play."
      },
      {
        icon: "🎯",
        title: "Community Impact",
        description: "Brought the community together through sports, creating lasting positive change."
      }
    ],
    images: [
      {
        url: "/sports-forward-web/images/projects/hoops/hoops-preview-1.png",
        caption: "Students with new basketball equipment"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/hoops-preview-2.png",
        caption: "Basketball court at Modern Public School"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/hoops-preview-3.jpg",
        caption: "Children playing basketball for the first time"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-1.png",
        caption: "Basketball training session"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-2.png",
        caption: "Students practicing their skills"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-3.png",
        caption: "Team building through basketball"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-4.png",
        caption: "Community basketball event"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-5.png",
        caption: "Young athletes developing their game"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-6.png",
        caption: "Basketball equipment in use"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-7.png",
        caption: "Students enjoying organized sports"
      },
      {
        url: "/sports-forward-web/images/projects/hoops/gallery/hoops-8.png",
        caption: "First basketball tournament at the school"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default HoopsForGrowth;