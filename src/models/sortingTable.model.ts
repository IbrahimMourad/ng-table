export interface Data {
    date?: string,
    type?: string,
    category?: string,
    payment_Method?: string,
    label?: string,
    marchant_Name?: string,
    amount?: string,
    balance?: string | number,
    parentCategory?: string,
    [key: string]: any
}
export interface Column {
    [key: string]: any,
    title?: string,
    dataIndex?: string,
    isSearchable?: boolean,
    isSortable?: boolean,
}