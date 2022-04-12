// Lets imagine if arrays in JS were static

class MyArray<T> {
  private contents: T[];
  private count: number = 0;

  constructor(size: number) {
    if (size < 0 || size !== Math.floor(size))
      throw new RangeError('Invalid array length');

    this.contents = new Array(size);
  }

  public insert(item: T): void {
    if (this.count === this.contents.length) {
      const oldArr = [...this.contents];

      this.contents = new Array(this.count + 1);

      for (let i = 0; i < oldArr.length; i++) this.contents[i] = oldArr[i];
    }

    this.contents[this.count] = item;
    this.count++;
  }

  public removeAt(index: number): T {
    if (this.count <= index || index < 0 || Math.floor(index) !== index)
      throw new RangeError('Invalid index');

    const oldArr = [...this.contents];
    this.contents = new Array(this.count - 1);

    for (let i = 0; i < oldArr.length; i++) {
      if (i === index) continue;

      if (i < index) {
        this.contents[i] = oldArr[i];
        continue;
      }

      this.contents[i - 1] = oldArr[i];
    }

    this.count--;
    return oldArr[index];
  }

  public indexOf(item: T): number {
    for (let i = 0; i < this.count; i++)
      if (item === this.contents[i]) return i;

    return -1;
  }

  public print(): void {
    for (let i = 0; i < this.count; i++) {
      console.log(this.contents[i]);
    }
  }
}

const array = new MyArray<number>(3);

array.insert(10);
array.insert(20);
array.insert(30);

array.print();

console.log('');

console.log(array.indexOf(30));
console.log(array.removeAt(1));
console.log(array.indexOf(30));

console.log('');

array.print();
