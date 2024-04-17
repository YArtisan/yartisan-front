export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone_number: string;
  password: string;
  userFunction: string;
}

export interface ArtisanUser {
  _id: string;
  email: string;
  company_name: string;
  phone_number: string;
  profile_picture: string;
  job_description: string;
  number_of_employees: number;
  average_price: number;
  userFunction: "artisan";
}
