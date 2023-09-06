import { TotalPiecesPipe } from './tota-pieces.pipe';

describe('TotalPiecesPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPiecesPipe();
    expect(pipe).toBeTruthy();
  });

  it('Validate function ', () => {
    const pipe = new TotalPiecesPipe();
    expect(pipe.transform([])).toBe(0);
    expect(pipe.transform([1, 2, 3])).toBe(6);
    expect(
      pipe.transform([{ pieces: 1 }, { pieces: 2 }, { pieces: 3 }], 'pieces')
    ).toBe(6);
  });
});
