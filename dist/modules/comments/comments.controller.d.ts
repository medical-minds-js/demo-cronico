import { CommentsServiceEntity } from 'src/core/database/entities/comments-service/comments-service.entity';
import { SuccessResponse } from 'src/core/clases/success.response';
export declare class CommentsController {
    private readonly commentsService;
    createComment(comment: CommentsServiceEntity): Promise<SuccessResponse>;
}
