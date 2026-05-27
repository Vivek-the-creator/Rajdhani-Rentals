import { images } from './images';
import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'metro-viaduct-access',
    name: 'Metro Viaduct Access Support',
    industry: 'Infrastructure',
    category: 'Infrastructure',
    description: 'High-reach boom lifts deployed for inspection, installation and finishing on elevated metro sections.',
    image: images.projects[0],
  },
  {
    id: 'industrial-plant-turnaround',
    name: 'Industrial Plant Turnaround',
    industry: 'Industrial Plants',
    category: 'Industrial',
    description: 'A mixed fleet of articulating booms and scissor lifts supported planned maintenance shutdown work.',
    image: images.projects[3],
  },
  {
    id: 'logistics-warehouse-fitout',
    name: 'Logistics Warehouse Fit-Out',
    industry: 'Logistics',
    category: 'Commercial',
    description: 'Electric scissor lifts enabled safe racking, electrical and fire systems installation inside a live facility.',
    image: images.projects[2],
  },
  {
    id: 'government-building-maintenance',
    name: 'Government Facility Maintenance',
    industry: 'Government Projects',
    category: 'Government',
    description: 'Truck-mounted cherry pickers handled facade, lighting and signage access with low site disruption.',
    image: images.projects[1],
  },
];

export const projectCategories = Array.from(new Set(projects.map((project) => project.category)));
