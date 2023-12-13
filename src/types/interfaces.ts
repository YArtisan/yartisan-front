export interface IHoraire {
  day_of_week: number;
  opening_time: string;
  closing_time: string;
}

export interface IRating {
  id: number;
  user_id: number;
  artisan_id: number;
  score: number;
  avis: string;
  created_at: Date;
  last_update: Date;
}

export interface IAddress {
  id: number;
  address_number: number;
  city: string;
  street_name: string;
  postal_code: string;
  country: string;
}

export interface IApiAddress extends Partial<IAddress> {
  lat: number;
  lon: number;
}

export interface IArtisan {
  _id: string;
  average_price: number;
  compagny_name: string;
  job_description: string;
  phone_number: string;
  profile_picture: string;
  number_of_employees: number;
  ratings: IRating[];
  opening_time: IHoraire[];
  updatedAt: Date;
  address: IAddress;
  createdAt: Date;
  isVisible: boolean;
}

export interface IMultiHoraire {
  days: number[];
  opening_time: string;
  closing_time: string;
}

export interface INavLink {
  href: string;
  label: string;
  dropdown?: INavLink[];
}
export interface ICoords { lat: number; lon: number }
