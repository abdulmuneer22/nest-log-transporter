"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require('winston');
const ecsFormat = require('@elastic/ecs-winston-format');
const logger = winston.createLogger({
    format: ecsFormat(),
    transports: [
        new winston.transports.Console()
    ]
});
exports.default = logger;
//# sourceMappingURL=index.js.map