import { OpenPayCard, OpenPayPublicCard } from './openpay.interfaces';

export function CardMapper(card: OpenPayCard): OpenPayPublicCard {
  return {
    card_number: card.card_number,
    holder_name: card.holder_name,
    expiration_year: card.expiration_year,
    expiration_month: card.expiration_month,
    bank_name: card.bank_name,
    bank_code: card.bank_code,
    type: card.type,
    brand: card.brand,
  } as OpenPayPublicCard;
}
