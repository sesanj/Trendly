export interface User {
  ID: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
  role: 'ADMIN' | 'CUSTOMER';
  registered: boolean;
  address?: Address;
  dateRegistered: number;
  username: string;
}

export interface Address {
  country: string;
  state: string;
  townCity: string;
  address: string;
  postalCode: string;
}
