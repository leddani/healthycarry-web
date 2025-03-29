export interface ResumeData {
  name: string;
  title: string;
  image: string;
  skills: string[];
  description: string;
}

export const resumeData: ResumeData[] = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Cardiologist',
    image: '/images/doctors/sarah-johnson.jpg',
    skills: ['Cardiology', 'Heart Surgery', 'Patient Care'],
    description: 'Experienced cardiologist with over 15 years of practice in treating heart conditions.',
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Neurologist',
    image: '/images/doctors/michael-chen.jpg',
    skills: ['Neurology', 'Brain Mapping', 'Clinical Research'],
    description: 'Specializing in neurological disorders and innovative treatment approaches.',
  },
  {
    name: 'Dr. Emily Martinez',
    title: 'Pediatrician',
    image: '/images/doctors/emily-martinez.jpg',
    skills: ['Pediatrics', 'Child Development', 'Preventive Care'],
    description: 'Dedicated to providing comprehensive care for children from infancy through adolescence.',
  }
];