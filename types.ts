
export type Language = 'en' | 'fr' | 'ar';

export interface PricingTier {
  id: string;
  range: string;
  price: string;
  description: string;
  recommended?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TrackingResult {
  id: string;
  status: string;
  location: string;
  date: string;
  details: string[];
}
