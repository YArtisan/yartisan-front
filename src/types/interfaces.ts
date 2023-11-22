export interface IHoraire {
  day_of_week: number;
  opening_time: string;
  closing_time: string;
}

export interface IRating {
  id: number;
  user_id: number;
  artisant_id: number;
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

export interface IArtisant {
  id: number;
  address: IAddress;
  compagny_name: string;
  phone: string;
  profile_picture: string;
  job_description: string;
  number_of_employees: number;
  avg_price: number;
  ratings: IRating[];
  horaires: IHoraire[];
  created_at: Date;
  last_update: Date;
  isVisible: boolean;
}
