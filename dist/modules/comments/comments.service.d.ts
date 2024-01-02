import { CommentsServiceEntity } from 'src/core/database/entities/comments-service/comments-service.entity';
export declare class CommentsService {
    private readonly commentsRepository;
    private readonly usersService;
    saveCommentService(data: CommentsServiceEntity): Promise<CommentsServiceEntity>;
    getAllComments(): Promise<import("./interfaces/comment.interface").UserComments[]>;
    updateUserComments(userId: number): Promise<number[]>;
}
