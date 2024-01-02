import { CommentsServiceEntity } from 'src/core/database/entities/comments-service/comments-service.entity';
export declare class CommentsRepositoryService {
    private readonly commentsRepository;
    constructor(commentsRepository: typeof CommentsServiceEntity);
    saveComment(data: CommentsServiceEntity): Promise<CommentsServiceEntity>;
    getAll(): Promise<CommentsServiceEntity[]>;
}
