import React from 'react';
import ProjectGallery from './ProjectGallery';

const KumtaSportsOpportunities = () => {
  const projectData = {
    title: "Kumta Sports Opportunities",
    category: "Sports Jersey Distribution",
    description: "Provided custom-branded sports jerseys to students at MHPS Hegde in Kumta Taluk, Uttara Kannada district, giving young athletes a sense of team identity, pride, and motivation to participate in sports.",
    location: "Karnataka, India",
    year: "2026",
    impact: "Custom jerseys distributed to students at MHPS Hegde, Kumta",
    highlights: [
      {
        icon: "👕",
        title: "Custom Jerseys",
        description: "Specially designed yellow and blue jerseys printed with 'MHPS HEGDE, Tq. Kumta, (U.K.)' and the Sports Forward Foundation logo."
      },
      {
        icon: "🙌",
        title: "Team Spirit",
        description: "Giving every student a jersey of their own helped build a shared sense of pride, identity, and belonging to a team."
      },
      {
        icon: "🏫",
        title: "School-Wide Distribution",
        description: "Jerseys were distributed to students at the Government Model Primary School in Hegde, Kumta, with teachers and local leaders joining the celebration."
      },
      {
        icon: "🎯",
        title: "Equip. Train. Empower.",
        description: "In line with our mission, each jersey carries our Equip, Train, Empower logo as a daily reminder of what's possible through sports."
      }
    ],
    images: [
      {
        url: "/images/projects/goa hegde/b62c7756-42e7-4791-8045-26053afc3d8c.jpeg",
        caption: "Jersey distribution ceremony with students and school staff at MHPS Hegde"
      },
      {
        url: "/images/projects/goa hegde/7361a7e9-5979-4772-b77f-2814bfc92d0b.jpeg",
        caption: "Students proudly holding their new sports jerseys"
      },
      {
        url: "/images/projects/goa hegde/6d0ef973-0604-471e-bec7-8562ac984a2a.jpeg",
        caption: "Back of the jersey featuring 'MHPS HEGDE, Tq. Kumta, (U.K.)' and the Sports Forward Foundation logo"
      },
      {
        url: "/images/projects/goa hegde/e4cd23a5-b861-4a37-b6e3-30327a08ddc0.jpeg",
        caption: "Front view of the yellow and blue custom sports jersey"
      }
    ]
  };

  return <ProjectGallery projectData={projectData} />;
};

export default KumtaSportsOpportunities;
