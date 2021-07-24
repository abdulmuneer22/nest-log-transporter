const winston = require('winston')
const ecsFormat = require('@elastic/ecs-winston-format')

export const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const ecsLogger = winston.createLogger({
    format: ecsFormat(),
    levels,
    transports: [
        new winston.transports.Console()
    ]
})


export default ecsLogger