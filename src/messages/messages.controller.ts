import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('/')
  getMessages() {
    return [
      {
        id: 1,
        text: 'Hello World',
      },
    ];
  }

  @Get('/:id')
  getMessage() {
    return {
      id: 1,
      text: 'Hello World',
    };
  }

  @Post('/')
  createMessage() {
    return {
      id: 1,
      text: 'Hello World',
    };
  }
}
