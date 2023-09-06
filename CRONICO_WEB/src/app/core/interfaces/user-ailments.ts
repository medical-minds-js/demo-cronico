import { Ailment, AilmentsImage } from './ailment.interface';
import { Product } from './product.interface';

export interface UserAilmentsSearch {
  id: number;
  name: string;
  description: string;
  userAilments: {
    id: number;
    userId: number;
    ailmentsId: number;
  };
  images: AilmentsImage[];
}

export interface UserAilments {
  id: number;
  userId: number;
  ailmentsId: number;
  userAilmentsProducts: UserAilmentsProduct[];
  ailments: Ailment;
}

export interface UserAilmentsProduct {
  id: number;
  userAilmentsId: number;
  productId: number;
  dose: number;
  initialDate: string;
  intakePeriod: string;
  firstTake: string;
  product: Product;
  dosesTaken: DoseTaken[];
  editing: boolean;
}

export interface DoseTaken {
  id: number;
  userAilmentsId: number;
  doseDate: string;
  status: number;
}
