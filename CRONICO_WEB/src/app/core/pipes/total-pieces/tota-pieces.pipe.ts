import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPieces',
})
export class TotalPiecesPipe implements PipeTransform {
  transform(arr: Array<any>, ...args: any[]): any {
    if (arr.length > 0) {
      return arr.reduce((total, curr) => total + curr.pieces, 0);
    }
    return 0;
  }
}
