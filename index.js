const Logger = require('./logger');

const logger = new Logger();

logger.on('message',data=>console.log(`Called listener with id:${data.id} and message: ${data.msg}`));

logger.log('Hello There');