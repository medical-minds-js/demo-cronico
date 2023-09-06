"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardMapper = void 0;
function CardMapper(card) {
    return {
        card_number: card.card_number,
        holder_name: card.holder_name,
        expiration_year: card.expiration_year,
        expiration_month: card.expiration_month,
        bank_name: card.bank_name,
        bank_code: card.bank_code,
        type: card.type,
        brand: card.brand,
    };
}
exports.CardMapper = CardMapper;
//# sourceMappingURL=open-pay.utils.js.map