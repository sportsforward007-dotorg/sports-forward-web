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
        url: "https://static.wixstatic.com/media/c9c221_d636a19790fb4bf8adfb2795c1fc4f67~mv2.png/v1/fill/w_800,h_600,al_c,q_85/c9c221_d636a19790fb4bf8adfb2795c1fc4f67~mv2.png",
        caption: "Students with new basketball equipment"
      },
      {
        url: "https://static.wixstatic.com/media/c9c221_f9ac73e644ad4f1e9a976d44ae822d4d~mv2.png/v1/fill/w_800,h_600,al_c,q_85/c9c221_f9ac73e644ad4f1e9a976d44ae822d4d~mv2.png",
        caption: "Basketball court at Modern Public School"
      },
      {
        url: "https://static.wixstatic.com/media/c9c221_f9e61142c6d6417ca967a7febb5595aa~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/Screen%20Shot%202024-10-21%20at%209_24_edited_jp.jpg",
        caption: "Children playing basketball for the first time"
      },
      {
        url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
        caption: "Students practicing dribbling skills"
      },
      {
        url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800",
        caption: "Team building through basketball"
      },
      {
        url: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=800",
        caption: "First basketball tournament at the school"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default HoopsForGrowth;