import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Aditya, How Are you man? Where are odfdf';
  }
}
