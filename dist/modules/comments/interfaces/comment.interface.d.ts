import { CommentsServiceEntity } from 'src/core/database/entities/comments-service/comments-service.entity';
export interface UserComments {
    comment: CommentsServiceEntity;
    userName: string;
}
