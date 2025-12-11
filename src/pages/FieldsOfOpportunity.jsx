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
        url: "/images/projects/fields/image_17.png",
        caption: "Soccer equipment donation in Uttar Pradesh"
      },
      {
        url: "/images/projects/fields/image_18.jpg",
        caption: "Complete sports equipment set for the school"
      },
      {
        url: "/images/projects/fields/image_01.jpg",
        caption: "Sports activities at the school"
      },
      {
        url: "/images/projects/fields/image_02.jpg",
        caption: "Soccer equipment donation in Uttar Pradesh"
      },
      {
        url: "/images/projects/fields/image_10.jpg",
        caption: "Complete sports equipment set for the school"
      },
      {
        url: "/images/projects/fields/image_13.jpg",
        caption: "Sports activities at the school"
      }
    ],
  videos: [
    {
      url: "/videos/projects/fields/video_01.mp4",
      caption: "Construction Progress",
    },
    {
      url: "/videos/projects/fields/video_02.mp4",
      caption: "Community Impact",
    },
    {
      url: "/videos/projects/fields/video_03.mp4",
      caption: "Construction Progress",
    }
  ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default FieldsOfOpportunity;