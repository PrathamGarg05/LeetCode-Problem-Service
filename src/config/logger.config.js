import winston from "winston";
import 'winston-mongodb';
import { LOG_DB_URL } from "./server.config.js";

const allowedTransport = [];

allowedTransport.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}))

allowedTransport.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
}))

allowedTransport.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    format: winston.format.combine(
        // first arg is defining the format of timestamp
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransport
});

export default logger;