"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levels = void 0;
const winston = require('winston');
const ecsFormat = require('@elastic/ecs-winston-format');
exports.levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const ecsLogger = winston.createLogger({
    format: ecsFormat(),
    levels: exports.levels,
    transports: [
        new winston.transports.Console()
    ]
});
exports.default = ecsLogger;
//# sourceMappingURL=ecs-logger.js.map