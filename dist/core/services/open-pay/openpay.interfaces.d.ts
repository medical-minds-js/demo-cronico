export interface OpenPayPayment {
    id: string;
    authorization: string;
    operation_type: string;
    transaction_type: string;
    status: string;
    conciliated: false;
    creation_date: string;
    operation_date: string;
    description: string;
    error_message: string;
    order_id: string;
    card: {
        type: string;
        brand: string;
        address: string;
        card_number: string;
        holder_name: string;
        expiration_year: string;
        expiration_month: string;
        allows_charges: boolean;
        allows_payouts: boolean;
        bank_name: string;
        bank_code: string;
    };
    customer_id: string;
    amount: number;
    fee: {
        amount: number;
        tax: number;
        currency: string;
    };
    currency: string;
    method: string;
}
export interface OpenPayCustomer {
    name: string;
    email: string;
    last_name: string;
    address?: {
        city: string;
        state: string;
        line1: string;
        line2: string;
        postal_code: string;
        country_code: string;
    };
    phone_number?: string;
}
export interface OpenPayTokenCard {
    token_id: string;
    device_session_id: string;
}
export interface OpenPayCard {
    id: string;
    card_number: string;
    holder_name: string;
    expiration_year: string;
    expiration_month: string;
    allows_charges: boolean;
    allows_payouts: boolean;
    creation_date: string;
    bank_name: string;
    bank_code: string;
    type: string;
    brand: string;
    customer_id: string;
}
export interface OpenPayPublicCard {
    card_number: string;
    holder_name: string;
    expiration_year: string;
    expiration_month: string;
    bank_name: string;
    bank_code: string;
    type: string;
    brand: string;
    active: boolean;
}
