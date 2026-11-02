export interface Office {
  id: string;
  name: string;
  city: string;
  area: string;
  fullAddress: string;
  phone: string;
  whatsapp: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapQuery: string;
  gallery: Array<{
    id: string;
    url: string;
    caption: string;
  }>;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'user-plus' | 'shield-check' | 'file-badge' | 'book-open';
  checklist: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: 'clock' | 'shield' | 'map-pin' | 'award' | 'star' | 'headphones';
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
