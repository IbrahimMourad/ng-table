import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  columns = [
    {
      dataIndex: 'category',
      title: 'category',
      isSortable: true,
      isSearchable: true,

    },
    {
      dataIndex: 'payment_Method',
      title: 'Payment Method',
      isSearchable: true,
    },
    {
      dataIndex: 'type',
      title: 'type',

    },
    {
      dataIndex: 'marchant_Name',
      title: 'Marchant Name',
      isSearchable: true,
    },
    {
      dataIndex: 'amount',
      title: 'amount'

    },
    {
      dataIndex: 'balance',
      title: 'balance'

    },
    {
      dataIndex: 'parentCategory',
      title: 'parentCategory', isSearchable: true,

    },
    {
      dataIndex: 'date',
      title: 'Date',

    },
    {
      dataIndex: 'label',
      title: 'Label', isSearchable: true,

    },
  ];
  dataSource = [
    {
      date: '23-05-2022',
      type: 'Expense',
      category: 'Transport Costs',
      payment_Method: 'zzzz Card',
      label:
        '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 10,23EUR 1EUR = 1,0000',
      marchant_Name: 'UBER EURO',
      amount: '-€10.23',
      balance: '20',
      parentCategory: 'Travel',
    },
    {
      date: '24-05-2022',
      type: 'Expense',
      category: 'Net Salaries	',
      payment_Method: 'Transfer',
      label: 'VIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XY',
      marchant_Name: 'EMMANUELLE SALARY ',
      amount: '-€944.47',
      balance: '-€4,360.93',
      parentCategory: 'Human Resources',
    },
    {
      date: '23-05-2022',
      type: 'Expense',
      category: 'A Costs',
      payment_Method: 'zzzz Card',
      label:
        '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 7,20EUR 1EUR = 1,0000',
      marchant_Name: 'UBER EURO',
      amount: '-7.20',
      balance: 2,
      parentCategory: 'Travel',
    },
    {
      date: '18-05-2022',
      type: 'Expense',
      category: 'Transport Costs',
      payment_Method: 'Credit Card',
      label:
        '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 7,28EUR 1EUR = 1,0000',
      marchant_Name: 'UBER EURO',
      amount: '-€7.28',
      balance: '3',
      parentCategory: 'Travel',
    },
  ];
}
