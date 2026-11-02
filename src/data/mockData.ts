import { Office, ServiceItem, Feature, Testimonial } from '../types';

export const INITIAL_OFFICES: Office[] = [
  {
    id: 'khanna-pul',
    name: 'Islamabad — Khanna Pul',
    city: 'Islamabad',
    area: 'Khanna Pul',
    fullAddress: 'Office No. 14, 1st Floor, Tech Tower, Lehtrar Road, Khanna Pul, Islamabad',
    phone: '+92 333 4447112',
    whatsapp: '923334447112',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    coordinates: { lat: 33.6268, lng: 73.1118 },
    mapQuery: 'Tech Tower, Lehtrar Road, Khanna Pul, Islamabad',
    gallery: [
      {
        id: 'kp-1',
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
        caption: 'Driver registration desk and biometric station'
      },
      {
        id: 'kp-2',
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
        caption: 'Customer consultation & verification room'
      },
      {
        id: 'kp-3',
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
        caption: 'Driver onboarding & training area'
      },
      {
        id: 'kp-4',
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
        caption: 'Tech Tower exterior entrance & parking'
      }
    ]
  },
  {
    id: 'g-11',
    name: 'Islamabad — G-11',
    city: 'Islamabad',
    area: 'G-11',
    fullAddress: 'Office No. 09, 1st Floor, Madina Market, Near Ghazali Road, G-11 Service Road, Islamabad',
    phone: '+92 371 0918881',
    whatsapp: '923710918881',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    coordinates: { lat: 33.6702, lng: 72.9972 },
    mapQuery: 'Madina Market, G-11 Service Road, Islamabad',
    gallery: []
  },
  {
    id: 'tench-road',
    name: 'Rawalpindi — Tench Road',
    city: 'Rawalpindi',
    area: 'Tench Road',
    fullAddress: 'Office No. 8, Basement, Anarkali Plaza, Tench Road, Near 22 Number Chowk, Cantt, Rawalpindi',
    phone: '+92 371 0918880',
    whatsapp: '923710918880',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    coordinates: { lat: 33.5855, lng: 73.0441 },
    mapQuery: 'Anarkali Plaza, Tench Road, 22 Number Chowk, Cantt, Rawalpindi',
    gallery: []
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'new-driver-registration',
    title: 'New Driver Registration',
    description: 'Complete inDrive profile setup from scratch. We guide you through every step of the registration process to get you on the road quickly.',
    iconName: 'user-plus',
    checklist: [
      'Document submission',
      'Profile photo & verification',
      'App installation & setup',
      'Account activation'
    ]
  },
  {
    id: 'account-troubleshooting',
    title: 'Account Troubleshooting & Support',
    description: 'Facing issues with your inDrive account? Our expert team resolves login problems, suspensions, and technical issues efficiently.',
    iconName: 'shield-check',
    checklist: [
      'Account recovery',
      'Suspension appeals',
      'Payment issues',
      'App technical support'
    ]
  },
  {
    id: 'document-verification',
    title: 'Document Verification Services',
    description: 'Ensure all your documentation meets inDrive standards. We verify and help submit CNIC, driving license, vehicle registration, and more.',
    iconName: 'file-badge',
    checklist: [
      'CNIC verification',
      'Driving license check',
      'Vehicle registration',
      'Insurance validation'
    ]
  },
  {
    id: 'driver-training',
    title: 'Driver Training & Guidance',
    description: 'New to ride-sharing? Our training sessions cover app usage, earnings optimization, customer service standards, and safety protocols.',
    iconName: 'book-open',
    checklist: [
      'App navigation training',
      'Earnings optimization tips',
      'Customer service skills',
      'Safety protocols'
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'same-day',
    title: 'Same-Day Processing',
    description: 'Walk in, get registered, and start earning — all within the same day.',
    iconName: 'clock'
  },
  {
    id: 'expert-assistance',
    title: 'Expert Assistance',
    description: 'Our trained staff has helped 2,500+ drivers successfully register on inDrive.',
    iconName: 'shield'
  },
  {
    id: 'convenient-locations',
    title: '3 Convenient Locations',
    description: 'Offices in Khanna Pul, G-11 Islamabad, and Tench Road Rawalpindi.',
    iconName: 'map-pin'
  },
  {
    id: 'verified-partner',
    title: 'Verified Partner',
    description: 'Official inDrive registration center with a proven track record of success.',
    iconName: 'award'
  },
  {
    id: 'rating',
    title: '4.9 Rating',
    description: 'Consistently high satisfaction scores from drivers we\'ve helped register.',
    iconName: 'star'
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    description: 'We remain available for account issues even after your registration is complete.',
    iconName: 'headphones'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Muhammad Asif',
    location: 'Islamabad',
    rating: 5,
    comment: 'Got registered within 2 hours at Khanna Pul office. Staff was very helpful and professional. Highly recommended!'
  },
  {
    id: 't-2',
    name: 'Tariq Mahmood',
    location: 'Rawalpindi',
    rating: 5,
    comment: 'Visited Tench Road office. They solved my account suspension issue quickly. Great service and very knowledgeable team.'
  },
  {
    id: 't-3',
    name: 'Usman Ali',
    location: 'Islamabad',
    rating: 5,
    comment: 'The G-11 office team guided me through the entire process. Now I\'m earning well on inDrive. Thank you!'
  }
];

export const QUICK_STEPS = [
  {
    number: '01',
    text: 'Visit any of our 3 office locations'
  },
  {
    number: '02',
    text: 'Bring your CNIC & driving license'
  },
  {
    number: '03',
    text: 'We set up your inDrive profile'
  },
  {
    number: '04',
    text: 'Start earning the same day'
  }
];
