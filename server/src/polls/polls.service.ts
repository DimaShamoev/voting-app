import { Injectable } from '@nestjs/common';
import { PollDto } from 'src/Dtos/poll.dto';
import { UserDto } from 'src/Dtos/user.dto';

@Injectable()
export class PollsService {
    private polls: PollDto[] = [];
    private pollID = 1;

    getAllPolls() {
        return this.polls;
    }

    getPollsByUserId(userId: string) {
        return this.polls.filter((poll) => poll.creatorId === userId);
    }

    createPoll(poll: PollDto, userId: string) {
        const newPoll: PollDto = {
            creatorId: userId,
            id: this.pollID++,
            ...poll,
        };

        this.polls.push(newPoll);
        return newPoll;
    }
}
