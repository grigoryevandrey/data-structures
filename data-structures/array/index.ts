// Lets imagine if arrays in JS were static

class MyArray<T> {
  protected contents: T[];
  protected count: number = 0;

  constructor(size: number) {
    if (size < 0 || size !== Math.floor(size))
      throw new RangeError('Invalid array length');

    this.contents = new Array(size);
  }

  public insert(item: T): void {
    if (this.count === this.contents.length) {
      const oldArr = [...this.contents];

      this.contents = new Array(this.count * 1 || 1);

      for (let i = 0; i < oldArr.length; i++) this.contents[i] = oldArr[i];
    }

    this.contents[this.count++] = item;
  }

  public removeAt(index: number): T {
    if (this.count <= index || index < 0 || Math.floor(index) !== index)
      throw new RangeError('Invalid index');

    const removed = this.contents[index];

    for (let i = index; i < this.count; i++)
      this.contents[i] = this.contents[i + 1];

    this.count--;
    return removed;
  }

  public indexOf(item: T): number {
    for (let i = 0; i < this.count; i++)
      if (item === this.contents[i]) return i;

    return -1;
  }

  public print(): void {
    for (let i = 0; i < this.count; i++) {
      process.stdout.write((this.contents[i] as unknown) + ' ');
    }
    process.stdout.write('\n');
  }
}

class NumberArray extends MyArray<number> {
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

const myNumberArr = new NumberArray(4);

myNumberArr.insert(10);
myNumberArr.insert(20);
myNumberArr.insert(30);
myNumberArr.insert(40);

myNumberArr.print();

myNumberArr.reverse();

myNumberArr.print();

console.log(`Intersection:`, myNumberArr.intersect([10, 20, 50, 70]));

console.log(`Max: ${myNumberArr.max()}`);

myNumberArr.reverse();
myNumberArr.removeAt(3);

myNumberArr.print();
console.log(`Max: ${myNumberArr.max()}`);
