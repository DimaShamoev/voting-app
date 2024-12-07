import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollDto } from 'src/Dtos/poll.dto';

@Controller('polls')
export class PollsController {
    constructor(private readonly pollsService: PollsService) {}

    @Get()
    getAllPolls() {
        return this.pollsService.getAllPolls();
    }

    @Get(':userId')
    getPollsByUserId(@Param('userId') userId: string) {
        return this.pollsService.getPollsByUserId(userId);
    }

    @Post()
    createPoll(@Body() body: { poll: PollDto; userId: string }) {
        return this.pollsService.createPoll(body.poll, body.userId);
    }
}
