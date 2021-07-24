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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadService = void 0;
const common_1 = require("@nestjs/common");
const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const config = {
    STORANGE_ENDPOINT: "fra1.digitaloceanspaces.com",
    STORAGE_ACCESS_KEY: "NMLHT5JNTX4FTEHQDUXO",
    SECRET_ACCESS_KEY: "v8jnCBrQTtR8FQd/j5/40v/lM8dvuIrE4bRBzE/sv54",
    STORAGE_BUCKET_NAME: "doctorapp"
};
const s3 = new AWS.S3({
    endpoint: process.env.STORANGE_ENDPOINT || config.STORANGE_ENDPOINT,
    accessKeyId: process.env.STORAGE_ACCESS_KEY || config.STORAGE_ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY || config.SECRET_ACCESS_KEY,
});
const idx_1 = require("idx");
let ImageUploadService = class ImageUploadService {
    constructor() {
        this.upload = multer({
            storage: multerS3({
                s3: s3,
                bucket: process.env.STORAGE_BUCKET_NAME || config.STORAGE_BUCKET_NAME,
                acl: 'public-read',
                key: function (request, file, cb) {
                    let folderName = idx_1.default(request, _ => _.headers.foldername) || 'temp';
                    let fullPath = `${folderName}/${Date.now().toString()} - ${file.originalname}`;
                    cb(null, fullPath);
                },
            }),
        }).array('upload', 1);
    }
    async fileupload(req, res) {
        return new Promise((resolve, reject) => {
            try {
                this.upload(req, res, function (error) {
                    if (error) {
                        throw new common_1.InternalServerErrorException(`Failed to upload image file: ${error}`);
                    }
                    resolve(req.files[0].location);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
__decorate([
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImageUploadService.prototype, "fileupload", null);
ImageUploadService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ImageUploadService);
exports.ImageUploadService = ImageUploadService;
//# sourceMappingURL=images.service.js.map