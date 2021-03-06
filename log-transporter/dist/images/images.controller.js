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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ImagesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const images_service_1 = require("./images.service");
const nestjs_pino_1 = require("nestjs-pino");
let ImagesController = ImagesController_1 = class ImagesController {
    constructor(imageUploadService, logger) {
        this.imageUploadService = imageUploadService;
        this.logger = logger;
    }
    async uploadImage(req, res) {
        try {
            let fileUrl = await this.imageUploadService.fileupload(req, res) || null;
            return res.json({ url: fileUrl });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getUserImages() {
        this.logger.log("getUserImages()", ImagesController_1.name);
        logger.error('oops there is a problem', { foo: 'bar' });
        return "Please implement me";
    }
    async deleteImage() {
        return "Please implement me";
    }
};
__decorate([
    common_1.Post('upload'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadImage", null);
__decorate([
    common_1.Get('images'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getUserImages", null);
__decorate([
    common_1.Delete('images:/:url'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteImage", null);
ImagesController = ImagesController_1 = __decorate([
    common_1.Controller('images'),
    __metadata("design:paramtypes", [images_service_1.ImageUploadService,
        nestjs_pino_1.Logger])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map