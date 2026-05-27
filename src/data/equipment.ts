import { images } from './images';
import type { Equipment } from '../types';

export const equipment: Equipment[] = [
  {
    id: 'articulating-boom-lift',
    name: 'Articulating Boom Lift',
    category: 'Articulating Boom Lift',
    description:
      'Knuckle boom lifts for precise up-and-over access around structures, pipe racks and plant equipment.',
    image: images.boomLift,
    gallery: [images.boomLift, images.operator, images.safety],
    availability: 'Available',
    specs: {
      workingHeight: '45 ft to 135 ft',
      horizontalReach: '25 ft to 70 ft',
      platformCapacity: '230 kg',
      power: 'Diesel / Electric',
    },
    features: ['Zero tail swing options', 'Rough terrain drive', '360 degree rotation', 'Proportional controls'],
    applications: ['Facade work', 'MEP installation', 'Industrial maintenance', 'Warehouse fit-outs'],
    safetyNotes: ['Certified operators recommended', 'Daily pre-start inspection', 'Harness anchor points provided'],
  },
  {
    id: 'telescopic-boom-lift',
    name: 'Telescopic Boom Lift',
    category: 'Telescopic Boom Lift',
    description:
      'Straight boom access platforms for maximum horizontal reach on large construction and infrastructure sites.',
    image: images.telescopic,
    gallery: [images.telescopic, images.projects[0], images.engineer],
    availability: 'Available',
    specs: {
      workingHeight: '60 ft to 185 ft',
      horizontalReach: '50 ft to 100 ft',
      platformCapacity: '230 kg to 450 kg',
      power: 'Diesel',
    },
    features: ['High reach envelope', '4WD rough terrain capability', 'Oscillating axle', 'Fast platform positioning'],
    applications: ['Bridge work', 'Refineries', 'Large sheds', 'Airport and metro projects'],
    safetyNotes: ['Ground bearing checks required', 'Wind limits must be followed', 'Operator certification advised'],
  },
  {
    id: 'cherry-picker',
    name: 'Cherry Picker',
    category: 'Cherry Picker',
    description:
      'Truck-mounted and self-propelled cherry pickers for quick, safe access in cities and industrial zones.',
    image: images.cherryPicker,
    gallery: [images.cherryPicker, images.gallery[2], images.projects[2]],
    availability: 'Limited',
    specs: {
      workingHeight: '35 ft to 120 ft',
      horizontalReach: '18 ft to 60 ft',
      platformCapacity: '200 kg',
      power: 'Truck PTO / Diesel',
    },
    features: ['Fast mobilization', 'Compact setup footprint', 'Traffic-friendly deployment', 'Utility work ready'],
    applications: ['Lighting maintenance', 'Signage', 'Tree trimming', 'Building inspection'],
    safetyNotes: ['Outrigger setup area needed', 'Traffic control may be required', 'Avoid overhead power lines'],
  },
  {
    id: 'spider-lift',
    name: 'Spider Lift',
    category: 'Spider Lift',
    description:
      'Compact tracked lifts for confined areas, sensitive flooring and indoor-outdoor projects with tight access.',
    image: images.spiderLift,
    gallery: [images.spiderLift, images.gallery[7], images.safety],
    availability: 'On Request',
    specs: {
      workingHeight: '50 ft to 100 ft',
      horizontalReach: '25 ft to 45 ft',
      platformCapacity: '200 kg',
      power: 'Bi-energy / Electric',
    },
    features: ['Narrow access travel', 'Low ground pressure tracks', 'Auto levelling outriggers', 'Indoor emission control'],
    applications: ['Atriums', 'Malls', 'Airports', 'Heritage restoration'],
    safetyNotes: ['Floor load verification required', 'Outrigger mats recommended', 'Use indoors with ventilation planning'],
  },
  {
    id: 'skylift-crane',
    name: 'Skylift Crane',
    category: 'Skylift Crane',
    description:
      'Skylift crane solutions for elevated installation, maintenance and material handling support.',
    image: images.skylift,
    gallery: [images.skylift, images.projects[1], images.gallery[4]],
    availability: 'Available',
    specs: {
      workingHeight: '60 ft to 150 ft',
      horizontalReach: '30 ft to 80 ft',
      platformCapacity: '200 kg to 500 kg',
      power: 'Diesel',
    },
    features: ['Heavy duty chassis', 'Long outreach options', 'Operator-assisted setup', 'Industrial grade stability'],
    applications: ['Plant maintenance', 'Steel erection support', 'Signage', 'Utilities'],
    safetyNotes: ['Lift plan required for complex sites', 'Barricading mandatory', 'Certified supervision recommended'],
  },
  {
    id: 'scissor-lift',
    name: 'Scissor Lift',
    category: 'Scissor Lift',
    description:
      'Electric and diesel scissor lifts for stable vertical access across warehouses, factories and project sites.',
    image: images.scissorLift,
    gallery: [images.scissorLift, images.gallery[3], images.engineer],
    availability: 'Available',
    specs: {
      workingHeight: '20 ft to 60 ft',
      horizontalReach: 'Deck extension',
      platformCapacity: '320 kg to 680 kg',
      power: 'Electric / Diesel',
    },
    features: ['Large work platform', 'Indoor electric models', 'Rough terrain variants', 'Non-marking tire options'],
    applications: ['Warehouse maintenance', 'Electrical works', 'Painting', 'Factory installation'],
    safetyNotes: ['Use on level surfaces', 'Guardrails must remain closed', 'Do not drive elevated on uneven ground'],
  },
];

export const equipmentCategories = Array.from(new Set(equipment.map((item) => item.category)));
