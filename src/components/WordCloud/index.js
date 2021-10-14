import React from 'react'
import { TagCloud } from "react-tagcloud";

const SkillCloud = ({children}) => {
  const color = `#23A6D5`
  const data = [
    {value: "Atomic Design", count:15, color: color},
    {value: "Rapid Prototyping", count:18, color: color},
    {value: "Data Visualization", count:30, color: color},
    {value: "Front End Development", count:30, color: color},
    {value: "User Research", count:16, color: color},
    {value: "UX Design", count:30, color: color},
    {value: "Installation Art", count:20, color: color},
    {value: "Animation", count:20, color: color},
    {value: "UI Design", count:20, color: color},
    {value: "Branding", count:20, color: color},
    {value: "Marketing Campaign", count:15, color: color},
    {value: "Design Thinking", count:20, color: color},
    {value: "Social Media", count:20, color: color},
    {value: "Storytelling", count:20, color: color},
    {value: "Data Analytics", count:20, color: color},
    {value: "Interaction Design", count:20, color: color},
    {value: "Agile", count:13, color: color},
    {value: "Project Management", count:10, color: color},
    {value: "Accessibility", count:15, color: color}
  ];
    return (
      <TagCloud minSize={10}
                maxSize={30}
                tags={data} />
    );
}

export default SkillCloud
