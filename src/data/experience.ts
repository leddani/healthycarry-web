export interface ExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export const experienceData: ExperienceData[] = [
  {
    title: 'Senior Cardiologist',
    company: 'Mayo Clinic',
    location: 'Rochester, MN',
    period: '2018 - Present',
    description: 'Leading cardiovascular research and patient care initiatives.',
  },
  {
    title: 'Neurology Department Head',
    company: 'Johns Hopkins Hospital',
    location: 'Baltimore, MD',
    period: '2015 - 2018',
    description: 'Managed a team of neurologists and conducted clinical trials.',
  },
  {
    title: 'Pediatric Specialist',
    company: 'Boston Children\'s Hospital',
    location: 'Boston, MA',
    period: '2012 - 2015',
    description: 'Provided specialized care for children with complex medical conditions.',
  }
];