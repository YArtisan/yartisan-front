import { UserType } from "@/user/enums/UserType";
import { User } from "@/user/types/User";

export interface IOpeningHours {
  day_of_week: number;
  opening_time: string;
  closing_time: string;
}

export interface IRating {
  id: number;
  user_id: number;
  artisan_id: number;
  score: string;
  avis: string;
  user: { firstName: string; lastname: string };
  createdAt: Date;
  updatedAt: Date;
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
  company_name: string;
  job_description: string;
  phone_number: string;
  profile_picture: string;
  email: string;
  number_of_employees: number;
  ratings: IRating[];
  opening_hours: IOpeningHours[];
  updatedAt: Date;
  address: IAddress;
  createdAt: Date;
  isVisible: boolean;
}

export interface IArtisanFormData {
  company_name: string;
  phone_number: string;
  email: string;
  password: string;
  profile_picture: string;
  job_description: string;
  average_price: string;
  address: Partial<IApiAddress>;
  opening_hours: Partial<IOpeningHours>[];
  number_of_employees: string;
  userFunction: UserType;
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
export interface ICoords {
  lat: number;
  lon: number;
}

export interface IMessage {
  _id: string;
  conversation_id: string;
  expediteur_id: string;
  message: string;
  created_at: string;
  last_update: string;
  url?: string;
}

export interface IConversation {
  _id: string;
  user: User;
  artisan: IArtisan;
  created_at: string;
  last_update: string;
  data: {
    name: string;
    email: string;
    phone: string;
  };
}
