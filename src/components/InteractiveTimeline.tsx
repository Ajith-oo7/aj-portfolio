
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon, Code2Icon } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: 'work' | 'education' | 'award' | 'project';
  tags?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Senior Data Engineer",
    subtitle: "TechCorp Inc.",
    date: "2022 - Present",
    description: "Led a team of data engineers in designing and implementing data pipelines that process over 10TB of data daily. Reduced processing time by 40% and improved data quality by implementing robust validation checks.",
    type: "work",
    tags: ["AWS", "Snowflake", "Python", "Airflow"]
  },
  {
    id: 2,
    title: "Data Engineer",
    subtitle: "DataStream Solutions",
    date: "2020 - 2022",
    description: "Developed and maintained ETL processes for multiple clients across various industries. Implemented real-time data processing solutions that improved decision-making capabilities.",
    type: "work",
    tags: ["Spark", "Kafka", "SQL", "Docker"]
  },
  {
    id: 3,
    title: "Master's in Data Science",
    subtitle: "Tech University",
    date: "2018 - 2020",
    description: "Focused on advanced data engineering techniques, distributed systems, and machine learning operations. Graduated with distinction.",
    type: "education",
    tags: ["Machine Learning", "Big Data", "Statistics"]
  },
  {
    id: 4,
    title: "Data Analytics Award",
    subtitle: "Industry Innovation Awards",
    date: "2021",
    description: "Recognized for developing an innovative approach to real-time data processing that has since been adopted as an industry standard.",
    type: "award",
    tags: ["Innovation", "Real-time Analytics"]
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science",
    subtitle: "State University",
    date: "2014 - 2018",
    description: "Specialized in database systems and distributed computing. Graduated summa cum laude.",
    type: "education",
    tags: ["Algorithms", "Databases", "Systems Architecture"]
  },
  {
    id: 6,
    title: "Open Source Contribution",
    subtitle: "Data Processing Framework",
    date: "2019",
    description: "Major contributor to an open-source data processing framework that simplifies ETL operations for small to medium enterprises.",
    type: "project",
    tags: ["Open Source", "Python", "Community"]
  }
];

const InteractiveTimeline: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [activeDot, setActiveDot] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the first item as default selected
    setSelectedItem(timelineData[0]);
  }, []);

  const handleItemClick = (item: TimelineItem) => {
    setSelectedItem(item);
    setActiveDot(item.id);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'work':
        return <BriefcaseIcon className="w-5 h-5" />;
      case 'education':
        return <GraduationCapIcon className="w-5 h-5" />;
      case 'award':
        return <AwardIcon className="w-5 h-5" />;
      case 'project':
        return <Code2Icon className="w-5 h-5" />;
      default:
        return <BriefcaseIcon className="w-5 h-5" />;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case 'work':
        return 'neon-blue';
      case 'education':
        return 'neon-purple';
      case 'award':
        return 'neon-orange';
      case 'project':
        return 'neon-pink';
      default:
        return 'neon-blue';
    }
  };

  return (
    <div className="w-full neo-blur border border-white/10 rounded-lg p-6" ref={timelineRef}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/20 z-0" />
        
        {/* Timeline items */}
        <div className="space-y-12 relative z-10">
          {timelineData.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full cursor-pointer z-20
                  ${activeDot === item.id 
                    ? `bg-${getColorForType(item.type)} ring-2 ring-${getColorForType(item.type)}/30` 
                    : 'bg-gray-700'}`}
                whileHover={{ scale: 1.2 }}
                onClick={() => handleItemClick(item)}
              />
              
              {/* Content card - alternating sides on larger screens */}
              <div 
                className={`md:w-5/12 ml-8 md:ml-0 ${
                  item.id % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className={`cursor-pointer ${
                    activeDot === item.id 
                      ? `border-${getColorForType(item.type)}/50` 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <Card className="bg-black/50 border-inherit overflow-hidden">
                    <div className={`h-1 w-full bg-${getColorForType(item.type)}`} />
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-400">{item.date}</p>
                          <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                          <p className="text-gray-300">{item.subtitle}</p>
                        </div>
                        <span className={`bg-${getColorForType(item.type)}/20 text-${getColorForType(item.type)} p-2 rounded-full`}>
                          {getIconForType(item.type)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Selected item detail */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <Card className={`bg-black/70 border border-${getColorForType(selectedItem.type)}/30`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`bg-${getColorForType(selectedItem.type)}/20 text-${getColorForType(selectedItem.type)} p-2 rounded-full`}>
                  {getIconForType(selectedItem.type)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
                  <p className="text-gray-300">{selectedItem.subtitle} • {selectedItem.date}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{selectedItem.description}</p>
              
              {selectedItem.tags && (
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`px-3 py-1 rounded-full text-xs bg-${getColorForType(selectedItem.type)}/10 text-${getColorForType(selectedItem.type)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveTimeline;
