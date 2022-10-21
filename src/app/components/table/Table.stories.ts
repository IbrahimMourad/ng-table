// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTooltipModule } from '@angular/material/tooltip';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Table',
    component: TableComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, MatTooltipModule],
        }),
    ],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {

    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TableComponent> = (args: TableComponent) => {
    args.resetFilter = () => alert('sdsds')

    return {
        props: args,
    }
};

export const MainTable = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
MainTable.args = {
    ...MainTable.args,

    dataSource: [
        {
            date: '23-05-2022',
            Type: 'Expense',
            Category: 'Transport Costs',
            Payment_Method: 'zzzz Card',
            Label:
                '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 10,23EUR 1EUR = 1,0000',
            Marchant_Name: 'UBER EURO',
            Amount: '-€10.23',
            Balance: 20,
            ParentCategory: 'Travel',
        },
        {
            date: '24-05-2022',
            Type: 'Expense',
            Category: 'Net Salaries	',
            Payment_Method: 'Transfer',
            Label: 'VIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XYVIR Emmanuelle SCHMIT A9201112 salary February 2022 XY',
            Marchant_Name: 'EMMANUELLE SALARY ',
            Amount: '-€944.47',
            Balance: '-€4,360.93',
            ParentCategory: 'Human Resources',
        },
        {
            date: '23-05-2022',
            Type: 'Expense',
            Category: 'A Costs',
            Payment_Method: 'zzzz Card',
            Label:
                '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 7,20EUR 1EUR = 1,0000',
            Marchant_Name: 'UBER EURO',
            Amount: '-7.20',
            Balance: 2,
            ParentCategory: 'Travel',
        },
        {
            date: '18-05-2022',
            Type: 'Expense',
            Category: 'Transport Costs',
            Payment_Method: 'Credit Card',
            Label:
                '980422 CB****5464 UBER *TRIP NL HELP.UBER.CO 7,28EUR 1EUR = 1,0000',
            Marchant_Name: 'UBER EURO',
            Amount: '-€7.28',
            Balance: 3,
            ParentCategory: 'Travel',
        },
    ],
    columns: [
        {
            dataIndex: 'Category',
            title: 'Category',
            isSortable: true,
            isSearchable: true,

        },
        {
            dataIndex: 'Payment_Method',
            title: 'Payment Method',
            isSearchable: true,
        },
        {
            dataIndex: 'Type',
            title: 'Type', isSearchable: true,

        },
        {
            dataIndex: 'Marchant_Name',
            title: 'Marchant Name',
            isSearchable: true,
        },
        {
            dataIndex: 'Amount',
            title: 'Amount', isSearchable: true,

        },
        {
            dataIndex: 'Balance',
            title: 'Balance', isSearchable: true,

        },
        {
            dataIndex: 'ParentCategory',
            title: 'ParentCategory', isSearchable: true,

        },
        {
            dataIndex: 'date',
            title: 'Date',

        },
        {
            dataIndex: 'Label',
            title: 'Label', isSearchable: true,

        },
    ]
};
