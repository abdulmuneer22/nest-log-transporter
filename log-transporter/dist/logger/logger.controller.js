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
exports.LoggerController = void 0;
const common_1 = require("@nestjs/common");
const ecs_logger_1 = require("../logger/ecs-logger");
let LoggerController = class LoggerController {
    async logMessage(message) {
        if (Object.keys(ecs_logger_1.levels).some((obj) => obj === message.level)) {
            ecs_logger_1.default[message.level](message);
            return 'Processed Log Successfully';
        }
        else if (message) {
            ecs_logger_1.default.info(message);
            return 'Processed Log Successfully';
        }
        return 'Invalid Log Passed';
    }
};
__decorate([
    common_1.Post('/add-log'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoggerController.prototype, "logMessage", null);
LoggerController = __decorate([
    common_1.Controller('logger')
], LoggerController);
exports.LoggerController = LoggerController;
//# sourceMappingURL=logger.controller.js.map