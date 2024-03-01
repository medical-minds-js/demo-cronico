"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipsService = void 0;
const common_1 = require("@nestjs/common");
const memberships_repository_service_1 = require("./memberships-repository.service");
let MembershipsService = class MembershipsService {
    async getSelectedMemberships() {
        const data = await this.membershipsRepositoryService.getSelectedMemberships();
        return data.map((item) => item.get({ plain: true }));
    }
    async getMembershipsByIds(ids) {
        const data = await this.membershipsRepositoryService.getByIds(ids);
        return data.map((item) => item.get({ plain: true }));
    }
    async getById(id) {
        return this.membershipsRepositoryService.getById(id);
    }
    async getGiftMemberships() {
        return this.membershipsRepositoryService.getById(1);
    }
    async increseDelievered(id) {
        const newObject = await this.membershipsRepositoryService.getById(id);
        await newObject.increment('delivered', { by: 1 });
    }
};
__decorate([
    (0, common_1.Inject)(memberships_repository_service_1.MembershipsRepositoryService),
    __metadata("design:type", memberships_repository_service_1.MembershipsRepositoryService)
], MembershipsService.prototype, "membershipsRepositoryService", void 0);
MembershipsService = __decorate([
    (0, common_1.Injectable)()
], MembershipsService);
exports.MembershipsService = MembershipsService;
//# sourceMappingURL=memberships.service.js.map