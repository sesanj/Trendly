import { Address, User } from './user.model';

export type OrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'OUT FOR DELIVERY'
  | 'DELIVERED'
  | 'CANCELED';

export interface Order {
  orderID: string;
  customer: Customer;
  products: CartProduct[];
  orderTotal: number;
  deliveryInfo: Address;
  status: OrderStatus;
  date: number;
}

export interface CartProduct {
  ID: string;
  productName: string;
  quantity: number;
  totalPrice: number;
  color?: string;
  size?: string;
}

export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  registered: boolean;
}
