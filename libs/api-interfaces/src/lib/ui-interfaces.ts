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

export interface PropertyDetail {
  address: {
    address_validation_code: string;
    boundary: { coordinates: []; type: 'Point' };
    city: string;
    country: string;
    county: string;
    county_needed_for_uniq: boolean;
    fips_code: number;
    line: string;
    location: { lon: number; lat: number };
    postal_code: string;
    state: string;
    state_code: string;
    street_name: string;
    street_number: string;
    street_suffix: string;
    time_zone: string;
    unit: number;
  };
  advertisers: Record<string, unknown>;
  agent: {
    advertiser_id: 4092143;
    email: 'lidia@expressinsurancedallas.com';
    href: null;
    mls_membership: Record<string, unknown>;
    name: 'Lidia Suarez';
    nrds_id: null;
    nrds_verified_id: null;
    office_name: 'Monument Realty';
    phones: Record<string, never>;
    photo: { href: 'https://ap.rdcpix.com/2b5b3863b7e667df936f726be47973d3a-c1834936147l.jpg' };
    profile_name: 'Lidia Suarez';
    slogan: null;
    state_license: '0546799';
  };
  branding: Record<string, unknown>;
  broker: Record<string, unknown>;
  client_display_flags: Record<string, unknown>;
  client_flags: Record<string, unknown>;
  display_property_type: string;
  duplicate_listings: Record<string, unknown>;
  features: Array<Record<string, unknown>>;
  flags: Record<string, unknown>;
  flood: Record<string, unknown>;
  foreclosures: number;
  forwarded_mpr_ids: Array<number>;
  hoa_fee: number;
  id: number;
  is_senior: boolean;
  lead_forms: Array<Record<string, unknown>>;
  listings: Array<Record<string, unknown>>;
  mls: Array<Record<string, unknown>>;
  mls_id: number;
  mortgage: {
    estimate: {
      down_payment: number;
      hoa_fees: number;
      loan_amount: number;
      monthly_home_insurance: number;
      monthly_mortgage_insurance: number;
      monthly_payment: number;
      monthly_property_taxes: number;
      principal_and_interest: number;
      rate: number;
      term: number;
      total_payment: number;
    };
    rates_url: string;
  };
  move_in: null;
  mpr_id: number;
  neighborhood: string;
  neighborhoods: Array<Record<string, unknown>>;
  new_construction: boolean;
  new_listing: boolean;
  noise: Record<string, unknown>;
  office: Record<string, unknown>;
  other_listings: Record<string, unknown>;
  parsed_addressed: Record<string, unknown>;
  photo_attribution: Array<string>;
  photo_count: number;
  photos: Array<{ description: string; href: string; tags: Array<Record<string, unknown>>; type: string }>;
  price_history: Array<Record<string, unknown>>;
  primary: boolean;
  product_attributes: Array<Record<string, unknown>>;
  product_name: string;
  products: Array<Record<string, unknown>>;
  prop_common: {
    bath: number;
    bath_full: number;
    baths_3qtr: number;
    baths_full: number;
    baths_full_calc: number;
    baths_half: number;
    baths_partial_calc: number;
    baths_total: number;
    bed: number;
    construction: number;
    contingent: boolean;
    cooling: boolean;
    description: string
    exterior: string;
    fireplace: number;
    garage: string;
    heating: string;
    hoa_fee: number;
    hoa_historic_fee: null;
    last_sold_price: null;
    last_update: string;
    list_date: string;
    list_date_raw: string;
    lot_sqft: number;
    pending: null;
    pending_date: null;
    permalink: string;
    pool: null;
    price: number;
    roofing: null;
    rooms: null;
    sqft: number;
    status: string;
    stories: number;
    style: null;
    sub_type: null;
    tax_amount: null;
    type: string;
    units: null;
    virtual_tour: Record<string, unknown>;
    year_built: number;
    year_renovate: number;
    zoning: null;
  };
  property_history: Array<{datasource_name: string, date: string, event_name: string, price: number, price_changed: number, price_range_max: 0, price_range_min: number, source: string, sqft: number}>
  public_records: Array<Record<string, unknown>>;
  query: Array<Record<string, unknown>>;
  raw: Array<Record<string, unknown>>;
  school_distrcits: Array<Record<string, unknown>>;
  schools: Array<{distance_in_miles: number, education_levels: Array<string>, funding_type: string, grades: {range: {high: string, low: string}}, greatschools_id: string, id: string, lat: number, location: {city: string, city_slug_id: string, county: string, postal_code: string, state: string, street: string}, lon: number, name: string, nces_id: string, phone: string, ratings: {great_schools_rating: number, parent_rating: null}, relevance: string, student_count: number, student_teacher_ration: number }>
  search_areas: Array<{city: string, state_code: string}>
  search_tags: Array<string>
  seller_promotion: Record<string, unknown>;
  short_sale: null;
  stories: number;
  suppression_flags: Array<string>;
  tax_history: Array<{assessment: {building: number, land: number, total: number}, tax: number, year: string}>
  trend: Record<string, unknown>;
  videos: null
}

export interface DialogData {
  address: string;
  photo: string;
  price: number;
  beds: string;
  bath: string;
  sqft: string;
  overview: string;
  marker: {
    lat: number;
    lng: number;
  };
  photos: Array<Record<string, unknown>>;
  propertyHistory: Array<{
    datasource_name: string;
    date: string;
    event_name: string;
    price: number;
    price_changed: number;
    price_range_max: number;
    price_range_min: number;
    source: string;
    sqft: number;
  }>;
  mortgageInfo: {
    down_payment: number;
    hoa_fees: number;
    loan_amount: number;
    monthly_home_insurance: number;
    monthly_mortgage_insurance: number;
    monthly_payment: number;
    monthly_property_taxes: number;
    principal_and_interest: number;
    rate: number;
    term: number;
    total_payment: number;
  };
  schools: Array<{
    distance_in_miles: number;
    education_levels: Array<string>;
    funding_type: string;
    grades: { range: { high: string; low: string } };
    greatschools_id: string;
    id: string;
    lat: number;
    location: {
      city: string;
      city_slug_id: string;
      county: string;
      postal_code: string;
      state: string;
      street: string;
    };
    lon: number;
    name: string;
    nces_id: string;
    phone: string;
    ratings: { great_schools_rating: number; parent_rating: null };
    relevance: string;
    student_count: number;
    student_teacher_ration: number;
  }>;
  propertyID: string;
  type: string;
  yearBuilt: number;
  parking: number;
  lot: number;
}


export type UserUI = User;
