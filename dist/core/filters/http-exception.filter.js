"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const fail_response_1 = require("../clases/fail.response");
const path_1 = require("path");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception instanceof fail_response_1.FailResponse) {
            response.status(400).json(exception);
            return;
        }
        if (exception instanceof common_1.UnauthorizedException) {
            response.status(401).json({
                status: 'error',
                message: 'Session invalida',
            });
            return;
        }
        if (exception instanceof common_1.NotFoundException) {
            const currentUrl = host.getArgs()[0].originalUrl;
            if (currentUrl.includes('api') ||
                currentUrl.includes('uploads') ||
                currentUrl.includes('downdloads') ||
                currentUrl.includes('assets')) {
                response.status(404).json({
                    status: 'error',
                    message: exception.message,
                });
                return;
            }
            response.sendFile((0, path_1.join)(__dirname, '..', '..', '..', 'public/index.html'));
            return;
        }
        response.status(500).json({
            status: 'error',
            message: exception.toString(),
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map