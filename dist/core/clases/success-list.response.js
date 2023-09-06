"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessListResponse = void 0;
class SuccessListResponse {
    constructor(data, total = null) {
        this.status = 'success';
        if (Array.isArray(data)) {
            this.data = {
                items: data,
                results: data.length,
                total: total || data.length,
            };
        }
        else {
            this.data = {
                items: data.items,
                results: data.items.length,
                total: data.total,
            };
        }
    }
}
exports.SuccessListResponse = SuccessListResponse;
//# sourceMappingURL=success-list.response.js.map