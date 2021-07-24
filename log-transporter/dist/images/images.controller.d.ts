import { ImageUploadService } from './images.service';
import { Logger } from "nestjs-pino";
export declare class ImagesController {
    private imageUploadService;
    private readonly logger;
    constructor(imageUploadService: ImageUploadService, logger: Logger);
    uploadImage(req: any, res: any): Promise<string>;
    getUserImages(): Promise<string>;
    deleteImage(): Promise<string>;
}
