import { Body, Controller, Post } from '@nestjs/common';
import ecslogger, { levels } from '../logger/ecs-logger'

@Controller('logger')
export class LoggerController {
    @Post('/add-log')
    async logMessage(
        @Body() message: any
    ): Promise<any> {

        if (Object.keys(levels).some((obj) => obj === message.level)) {
            ecslogger[message.level](message)
            return 'Processed Log Successfully'
        } else if (message) {
            ecslogger.info(message)
            return 'Processed Log Successfully'
        }


        return 'Invalid Log Passed'
    }
}
