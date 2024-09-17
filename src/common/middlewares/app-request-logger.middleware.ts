import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import chalk from 'chalk';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppRequestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP', {
    timestamp: true,
  });

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, path: url } = req;
    const correlationHeader = req.header('x-correlation-id') || uuid();
    req.headers['x-correlation-id'] = correlationHeader;
    res.set('X-Correlation-Id', correlationHeader);

    res.on('close', () => {
      const { statusCode } = res;

      // Customize colors for method and statusCode
      const methodColor = chalk.blue.bold(method); // Customize the color as needed
      let statusColor = chalk.green.bold(statusCode.toString()); // Default to green for success

      if (statusCode >= 400 && statusCode < 500) {
        statusColor = chalk.red.bold(statusCode.toString()); // Yellow for client errors
      } else if (statusCode >= 500) {
        statusColor = chalk.yellow.bold(statusCode.toString()); // Red for server errors
      }

      this.logger.log(`${methodColor} | ${statusColor} | ${url} | ${ip}`);
    });

    next();
  }
}
