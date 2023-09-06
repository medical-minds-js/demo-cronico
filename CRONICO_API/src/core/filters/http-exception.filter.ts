import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FailResponse } from '../clases/fail.response';
import express, { Request, Response } from 'express';
import { join } from 'path';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    if (exception instanceof FailResponse) {
      response.status(400).json(exception);
      return;
    }
    if (exception instanceof UnauthorizedException) {
      response.status(401).json({
        status: 'error',
        message: 'Session invalida',
      });
      return;
    }

    if (exception instanceof NotFoundException) {
      const currentUrl = host.getArgs()[0].originalUrl;
      if (
        currentUrl.includes('api') ||
        currentUrl.includes('uploads') ||
        currentUrl.includes('downdloads') ||
        currentUrl.includes('assets')
      ) {
        response.status(404).json({
          status: 'error',
          message: exception.message,
        });
        return;
      }
      response.sendFile(join(__dirname, '..', '..', '..', 'public/index.html'));
      return;
    }

    response.status(500).json({
      status: 'error',
      message: exception.toString(),
    });
  }
}
