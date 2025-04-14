
import React, { useState, useEffect } from 'react';
import { Award, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type Certification = {
  id: string;
  title: string;
  date: string;
  provider?: string;
};

const CertificationsSection: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const { data, error } = await supabase
          .from('certifications')
          .select('*')
          .order('date', { ascending: false });
        
        if (error) {
          throw new Error(error.message);
        }
        
        // If we don't have any certifications in the database yet, use default ones
        if (data && data.length > 0) {
          setCertifications(data);
        } else {
          // Fallback to default certifications
          setCertifications([
            {
              id: "1",
              title: "AWS Data Engineer Associate",
              date: "Sept 2024",
              provider: "Amazon Web Services"
            },
            {
              id: "2",
              title: "Apache Cassandra 3 Developer",
              date: "April 2025",
              provider: "DataStax"
            },
            {
              id: "3",
              title: "Databricks Generative AI Fundamentals",
              date: "Jan 2025",
              provider: "Databricks"
            }
          ]);
        }
      } catch (err) {
        console.error('Error fetching certifications:', err);
        setError('Failed to load certifications');
        // Fallback to default certifications on error
        setCertifications([
          {
            id: "1",
            title: "AWS Data Engineer Associate",
            date: "Sept 2024",
            provider: "Amazon Web Services"
          },
          {
            id: "2",
            title: "Apache Cassandra 3 Developer",
            date: "April 2025",
            provider: "DataStax"
          },
          {
            id: "3",
            title: "Databricks Generative AI Fundamentals",
            date: "Jan 2025",
            provider: "Databricks"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {error && (
        <div className="col-span-full text-red-500 bg-red-100 p-4 rounded-lg">
          {error}
        </div>
      )}
      
      {certifications.map((cert) => (
        <div 
          key={cert.id}
          className="neo-blur border border-white/10 rounded-lg p-6 transition-all duration-300 hover:border-neon-blue/30 flex flex-col"
        >
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-neon-blue" />
            <h3 className="ml-2 text-lg font-semibold text-white">{cert.title}</h3>
          </div>
          {cert.provider && (
            <p className="text-gray-400 text-sm mb-2">{cert.provider}</p>
          )}
          <div className="mt-auto flex items-center text-gray-300 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-neon-pink" />
            {cert.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsSection;
