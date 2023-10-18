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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const home_reposiory_service_1 = require("./home-reposiory.service");
let HomeService = class HomeService {
    async getHomeVideo() {
        return {
            name: 'video',
            description: 'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.',
            path: '/assets/videos/VID-MediTrust-Intro.mp4',
        };
    }
    async getAboutUs() {
        return {
            name: 'Quienes somos',
            description: 'Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.',
        };
    }
    async getBenefits() {
        return [
            {
                name: 'Portitor ullamcorper',
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                icon: 'icon fa-gem',
            },
            {
                name: 'Sapien veroeros',
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                icon: 'icon solid fa-paper-plane',
            },
            {
                name: 'Quam lorem ipsum',
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                icon: 'icon solid fa-rocket',
            },
            {
                name: 'Sed magna finibus',
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                icon: 'icon solid fa-signal',
            },
        ];
    }
    async getSocialCause() {
        return {
            name: 'Causa social',
            description: 'Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.',
        };
    }
    async getTestimonials() {
        return [
            {
                name: 'Jorge',
                description: 'Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.',
            },
        ];
    }
    createRequestSupply(data) {
        return this.homeRepository.createRequestSupply(data);
    }
};
__decorate([
    (0, common_1.Inject)(home_reposiory_service_1.HomeRepositoryService),
    __metadata("design:type", home_reposiory_service_1.HomeRepositoryService)
], HomeService.prototype, "homeRepository", void 0);
HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map