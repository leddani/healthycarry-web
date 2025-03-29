'use client';

import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ResumeData } from '@/data/resume';

interface ResumeCardProps {
  data: ResumeData;
}

export default function ResumeCard({ data }: ResumeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <Avatar
          src={data.image}
          alt={data.name}
          className="w-16 h-16"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
          <p className="text-gray-600 mt-1">{data.title}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {data.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-gray-700 mt-4">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
}