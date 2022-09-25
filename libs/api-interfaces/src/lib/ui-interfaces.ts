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
      coordinate: { lat: number; lon: number };
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
  photos: Array<{ href: string }>;
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

// export interface PropertyDetail {
//   photos: Array<{ href: string }>;
//   forwarded_property_ids: Record<string, never>;
//   mpr_id: number;
//   address: {
//     street_post_direction: string;
//     state: string;
//     address_validation_code: string;
//     line: string;
//     boundary: {
//       coordinates: [];
//       type: string;
//     };
//     street_number: string;
//     street_suffix: string;
//     time_zone: string;
//     state_code: string;
//     county: string;
//     street_direction: string;
//     postal_code: string;
//     county_needed_for_uniq: false;
//     street_name: string;
//     country: string;
//     city: string;
//     location: {
//       lon: number;
//       lat: number;
//     };
//     unit_value: string;
//   };
//   buyer_agent_for_far: Record<string, never>;
//   property_overview: string;
//   flood: {
//     environmental_risk: number;
//     flood_factor_score: number;
//     fema_zone: [];
//     fsid: string;
//     trend_direction: number;
//     flood_factor_severity: string;
//   };
//   agent: Record<string, never>;
//   office: Record<string, never>;
//   noise: {
//     score_text: string;
//     traffic_text: string;
//     local_text: string;
//     score: number;
//     airport_text: string;
//   };
//   display_property_type: string;
//   property_id: number;
//   rental_avm: {
//     estimate_high: number;
//     date: string;
//     id: string;
//     estimate_low: number;
//     estimate: number;
//   };
//   county: {
//     fips: string;
//     name: string;
//   };
//   listing_id: number;
//   stories: number;
//   search_areas: [];
//   id: number;
//   public_records: [
//     {
//       garage_spaces: number;
//       floor_1_sqft: number;
//       exterior1: string;
//       baths_1qtr: number;
//       lot_size: number;
//       date_updated: string;
//       baths_full: number;
//       pool: string;
//       cl_id: string;
//       year_built: number;
//       garage: string;
//       stories: number;
//       year_renovated: number;
//       lot_width: number;
//       view: string;
//       roofing: string;
//       sqft: number;
//       garage_sqft: number;
//       style: string;
//       fireplace: string;
//       heating: string;
//       units: number;
//       prop_type: string;
//       building_sqft: number;
//       baths_half: number;
//       cooling: string;
//       lot_depth: number;
//       baths: number;
//       distinct_baths: number;
//       construction_quality: string;
//       rooms: number;
//       baths_3qtr: number;
//       beds: number;
//       construction: number;
//     }
//   ];
//   prop_common: {
//     baths_full_calc: number;
//     bath_full: number;
//     bath: number;
//     type: string;
//     last_sold_price: number;
//     permalink: string;
//     status: string;
//     lot_sqft: number;
//     sqft: number;
//     garage: string;
//     baths_partial_calc: null;
//     description: string;
//     rental_estimate: number;
//     year_built: number;
//     original_price: number;
//     price: number;
//   };
//   query: {
//     client_id: string;
//     schema: string;
//   }

// }

export type UserUI = User;
