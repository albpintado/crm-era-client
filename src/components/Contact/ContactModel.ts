export interface ContactModel {
  id: number;
  name: string;
  date: string;
  details: string;
  method: string;
  opportunity: Opportunity;
}
export interface Opportunity {
  id: number;
  name: string;
  phone: string;
  email: string;
  isCustomer: boolean;
  conversionDate?: null;
}
