import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { Order } from '../app/models/product-order.model';
import { DatePipe } from '@angular/common';

export const orders: Order[] = [
  {
    orderID: '838FH383',
    customer: {
      firstName: 'Sesan',
      lastName: 'Popoola',
      email: 'Popoolajoel4@gmail.com',
      phoneNumber: '+2348036876569',
      registered: true,
    },
    products: [
      {
        ID: 'm1',
        productName: 'Green Men Hoddie Jacket',
        totalPrice: 72,
        quantity: 3,
        color: 'BLACK',
        size: 'M',
      },
      {
        ID: 'm2',
        productName: "Men's hoodie jacket designed in a  casual style.",
        totalPrice: 99,
        quantity: 1,
        color: 'WHITE',
        size: 'XL',
      },
      {
        ID: 'm3',
        productName: "Men's striped shirt.",
        totalPrice: 120,
        quantity: 1,
        color: 'WHITE',
        size: 'L',
      },
    ],
    orderTotal: 243,
    deliveryInfo: {
      country: 'Nigeria',
      state: 'Abuja',
      townCity: 'Life Camp',
      address: '14A Aribisola Close, Brains and Hammers Estate, Life Camp',
      postalCode: '123B3ZA',
    },
    status: 'PENDING',
    date: Date.now(),
  },

  {
    orderID: '8WRTH3Y3',
    customer: {
      firstName: 'Joel',
      lastName: 'Sylvester',
      email: 'joelSylv@gmail.com',
      phoneNumber: '+2348036876569',
      registered: false,
    },
    products: [
      {
        ID: 'm5',
        productName: 'Cotton Crew Neck Long Sleeve T-Shirt',
        totalPrice: 66,
        quantity: 1,
        color: 'GREEN',
        size: 'XL',
      },
      {
        ID: 'm3',
        productName: "Men's striped shirt.",
        totalPrice: 120,
        quantity: 1,
        color: 'WHITE',
        size: 'L',
      },
    ],
    orderTotal: 186,
    deliveryInfo: {
      country: 'Nigeria',
      state: 'Lagos',
      townCity: 'Banana Island',
      address: '35T West Avenue Victoria Estate',
      postalCode: 'AW234TW',
    },
    status: 'PENDING',
    date: Date.now(),
  },
];
