import { AbstractControl } from '@angular/forms';
import { User } from './prisma';

export interface LoginForm {
  email: AbstractControl<string>;
  password: AbstractControl<string>;
}

export interface Error {
  error: string;
  message: string[] | string;
  statusCode: number;
}


export interface HomeData {
  branding: [];
  coming_soon_date: string;
  community: null;
  description: {
    baths: number;
    baths_1qtr: number;
    baths_3qtr: number;
    baths_full: number;
    baths_half: number;
    beds: number;
    garage: number;
    lot_sqft: number;
    name: string;
    sold_date: string;
    sold_price: number;
    sqft: number;
    stories: number;
    sub_type: string;
    type: string;
    year_built: number;
  };
  flags: Record<string, never>;
  last_update_date: string;
  lead_attributes: Record<string, never>;
  list_date: string;
  list_price: number;
  listing_id: string;
  location: {
    address: {
      city: string;
      coordinate: { lon: number; lat: number };
      line: string;
      postal_code: string;
      state: string;
      state_code: string;
    };
    county: {
      fips_code: string;
      name: string;
    };
    street_view_url: string;
  };
  matterport: boolean;
  open_houses: null;
  other_listings: Record<string, never>;
  permalink: string;
  photos: Array<{href: string}>;
  price_reduced_amount: null;
  primary_photo: {
    href: string;
  };
  products: Record<string, never>;
  property_id: string;
  source: Record<string, never>;
  status: string;
  tags: Array<string>;
  tax_record: Record<string, never>;
  virtual_tours: null;
}

export type UserUI = User;
