import React from 'react';
import ProjectGallery from './ProjectGallery';

const FieldsOfOpportunity = () => {
  const projectData = {
    title: "Fields of Opportunity",
    category: "Sports Equipment Donation",
    description: "We successfully donated a full set of sports equipment to a school in Uttar Pradesh that previously had no access to sports equipment. We're proud to support their students in embracing physical activity and sports.",
    location: "Uttar Pradesh",
    year: "2024",
    impact: "400+ Students",
    highlights: [
      {
        icon: "⚽",
        title: "Soccer Equipment",
        description: "Complete soccer goalpost and multiple soccer balls for team sports and practice."
      },
      {
        icon: "🏸",
        title: "Badminton Sets",
        description: "Full badminton sets including rackets, nets, and shuttlecocks for recreational play."
      },
      {
        icon: "🎯",
        title: "First Access to Sports",
        description: "This school had zero access to sports equipment before our donation."
      },
      {
        icon: "📈",
        title: "Ongoing Progress",
        description: "Project continues to evolve with additional equipment and support being added."
      }
    ],
    images: [
      {
        url: "https://static.wixstatic.com/media/c9c221_4613ca45f40341888c49427181896f3f~mv2.png/v1/fill/w_800,h_600,al_c,q_85/c9c221_4613ca45f40341888c49427181896f3f~mv2.png",
        caption: "Soccer goalpost installation"
      },
      {
        url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800",
        caption: "Students playing soccer for the first time"
      },
      {
        url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800",
        caption: "Badminton practice session"
      },
      {
        url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
        caption: "Community sports day celebration"
      },
      {
        url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
        caption: "Students with new sports equipment"
      },
      {
        url: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=800",
        caption: "School playground transformed"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default FieldsOfOpportunity;