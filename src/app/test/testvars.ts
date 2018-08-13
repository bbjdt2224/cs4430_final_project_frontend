import { Account, Transaction } from '../interfaces';

export const  AccountsArray: Account[] = [
    {
        nickname: 'Rainy Day Fund',
        type: 'savings',
        bankRefrence: '8675309'
    },
    {
        nickname: 'House Account',
        type: 'Checking',
        bankRefrence: '236544864'
    },
    {
        nickname: 'My Spending Account',
        type: 'Checking',
        bankRefrence: '468516648'
    }
];

export const TransactionArray: Transaction[] = [
    {
        amount: 23.00,
        vendor: 'Kohles',
        date: new Date()
    },
    {
        amount: 16.00,
        vendor: 'Chipotle',
        date: new Date()
    },
    {
        amount: 65.00,
        vendor: 'McDonalds',
        date: new Date()
    }
];
