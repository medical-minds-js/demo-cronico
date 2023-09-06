import { Subject } from 'rxjs/internal/Subject';

export interface AppEffect {
  name: string;
  listener: Subject<any>;
}
