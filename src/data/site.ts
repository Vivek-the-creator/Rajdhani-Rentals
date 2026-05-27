import {
  BadgeCheck,
  Building2,
  Clock3,
  Construction,
  Factory,
  HardHat,
  Headset,
  Landmark,
  PackageCheck,
  ShieldCheck,
  TimerReset,
  Truck,
  Warehouse,
  Wrench,
} from 'lucide-react';
import { images } from './images';
import type { IconItem, Testimonial } from '../types';

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '+', label: 'Machines' },
  { value: 50, suffix: '+', label: 'Clients' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export const whyChooseUs: IconItem[] = [
  { title: 'Safety First', description: 'Documented inspections, trained crews and site-specific operating discipline.', icon: ShieldCheck },
  { title: 'On-Time Delivery', description: 'Coordinated dispatch planning that keeps your project schedule moving.', icon: Truck },
  { title: 'Machine Availability', description: 'A focused aerial access fleet across common working height ranges.', icon: PackageCheck },
  { title: 'Maximum Uptime', description: 'Preventive maintenance and rapid field support for critical rental windows.', icon: TimerReset },
  { title: 'Expert Consultation', description: 'Application-led equipment selection for reach, site and safety constraints.', icon: Headset },
  { title: 'Pan India Service', description: 'Rental support for construction, industrial and infrastructure projects.', icon: BadgeCheck },
];

export const industries: IconItem[] = [
  { title: 'Construction', description: 'Civil, commercial and high-rise access support.', icon: Construction },
  { title: 'Infrastructure', description: 'Metro, road, bridge and public utility projects.', icon: Landmark },
  { title: 'Logistics', description: 'Warehouse racking, lighting and maintenance work.', icon: Warehouse },
  { title: 'Industrial Plants', description: 'Shutdowns, inspections and equipment upkeep.', icon: Factory },
  { title: 'Government Projects', description: 'Public buildings, utilities and maintenance.', icon: Building2 },
  { title: 'Installation Services', description: 'MEP, signage, facade and fit-out tasks.', icon: Wrench },
];

export const timeline = [
  { year: '2016', title: 'Founded with a safety-led rental model' },
  { year: '2018', title: 'Expanded into boom lift and scissor lift fleets' },
  { year: '2021', title: 'Supported large infrastructure and industrial projects' },
  { year: '2024', title: 'Strengthened pan-India equipment coordination' },
];

export const leadership = [
  { name: 'Amit Sharma', role: 'Managing Partner', image: images.people[0] },
  { name: 'Neha Mehta', role: 'Operations Director', image: images.people[1] },
  { name: 'Vikram Rao', role: 'Fleet & Safety Head', image: images.people[2] },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rohit Sinha',
    company: 'MetroBuild Infrastructure',
    feedback:
      'Rajdhani Rentals handled our access requirements with strong planning, disciplined operators and excellent machine uptime.',
    image: images.people[0],
  },
  {
    name: 'Priya Kapoor',
    company: 'Prime Logistics Parks',
    feedback:
      'Their scissor lift fleet helped us complete installation work safely inside an active warehouse environment.',
    image: images.people[1],
  },
  {
    name: 'Arjun Menon',
    company: 'SteelWorks India',
    feedback:
      'The team recommended the right boom lifts for a difficult industrial site and stayed responsive throughout the project.',
    image: images.people[2],
  },
];

export const contactInfo = {
  phone: '+91 98765 43210',
  email: 'sales@rajdhanirentals.com',
  address: 'Rajdhani Rentals LLP, Industrial Equipment Yard, New Delhi, India',
};

export const quickFacts = [
  { icon: HardHat, label: 'Certified safety process' },
  { icon: Clock3, label: 'Rapid rental coordination' },
  { icon: ShieldCheck, label: 'Maintained access fleet' },
];
