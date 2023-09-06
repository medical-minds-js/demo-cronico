"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessListResponse = void 0;
class SuccessListResponse {
    constructor(items, total = null) {
        this.status = 'success';
        this.data = { items, results: items.length, total: total || items.length };
    }
}
exports.SuccessListResponse = SuccessListResponse;
//# sourceMappingURL=list.response%20copy.js.map