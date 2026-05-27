import type { LucideIcon } from 'lucide-react';

export type EquipmentCategory =
  | 'Articulating Boom Lift'
  | 'Telescopic Boom Lift'
  | 'Cherry Picker'
  | 'Spider Lift'
  | 'Skylift Crane'
  | 'Scissor Lift';

export type Availability = 'Available' | 'Limited' | 'On Request';

export interface Equipment {
  id: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  image: string;
  gallery: string[];
  availability: Availability;
  specs: {
    workingHeight: string;
    horizontalReach: string;
    platformCapacity: string;
    power: string;
  };
  features: string[];
  applications: string[];
  safetyNotes: string[];
}

export interface Project {
  id: string;
  name: string;
  industry: string;
  category: string;
  description: string;
  image: string;
}

export interface IconItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  company: string;
  feedback: string;
  image: string;
}
