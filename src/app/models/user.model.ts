export interface User {
  ID: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
  role: 'ADMIN' | 'CUSTOMER';
  registered: boolean;
  address: Address;
}

export interface Address {
  country: string;
  state: string;
  townCity: string;
  address: string;
  postalCode: string;
}
