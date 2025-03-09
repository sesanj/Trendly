import { User } from '../app/models/user.model';

export const users: User[] = [
  {
    ID: 'JDBMN32IDN244',
    firstName: 'Sesan',
    lastName: 'Popoola',
    password: 'police10!',
    email: 'Popoolajoel4@gmail.com',
    phoneNumber: '+2348036876569',
    role: 'ADMIN',
    registered: true,
    address: {
      country: 'Nigeria',
      state: 'Abuja',
      townCity: 'Life Camp',
      address: '14A Aribisola Close, Brains and Hammers Estate, Life Camp',
      postalCode: '123B3ZA',
    },
  },
  {
    ID: 'KSJH6435NF',
    firstName: 'Joel',
    lastName: 'Sylvester',
    password: 'police10!',
    email: 'joelSylv@gmail.com',
    phoneNumber: '+23480123876569',
    role: 'CUSTOMER',
    registered: true,
    address: {
      country: 'Nigeria',
      state: 'Lagos',
      townCity: 'Banana Island',
      address: '35T West Avenue Victoria Estate',
      postalCode: 'AW234TW',
    },
  },
];
