import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';

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
  getMessage(@Param('id') id: string) {
    return {
      id: 1,
      text: 'Hello World',
    };
  }

  @Post('/')
  createMessage(@Body() body: createMessageDto) {
    return {
      id: 1,
      text: 'Hello World',
    };
  }
}
