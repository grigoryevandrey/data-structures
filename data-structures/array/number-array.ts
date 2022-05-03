import { MyArray } from './array';

export class NumberArray extends MyArray<number> {
  public max(): number {
    if (this.count === 0) throw new Error('Array does not have any elements');

    let max = this.contents[0];

    for (let i = 0; i < this.count; i++)
      max = this.contents[i] > max ? this.contents[i] : max;

    return max;
  }

  public intersect(arr: number[]): number[] {
    const intersection = [];

    for (let i = 0; i < this.count; i++) {
      if (arr.includes(this.contents[i])) {
        intersection.push(this.contents[i]);
      }
    }

    return intersection;
  }

  public reverse(): void {
    const reversed = [];

    for (let i = this.count - 1; i >= 0; i--) {
      reversed.push(this.contents[i]);
    }

    this.contents = reversed;
  }
}
