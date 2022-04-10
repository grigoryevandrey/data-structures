// Lets imagine if arrays in JS were static

// Implement resize on adding
// Implement push method
// Implement splice method
// Implement pop method
// Implement indexof method

class MyArray<T> {
  private contents: T[];
  private size: number;

  constructor(size: number) {
    if (size < 0 || size !== Math.floor(size)) {
      throw new RangeError('Invalid array length');
    }

    this.contents = new Array(size);
    this.size = size;
  }

  public insert(item: T): void {
    for (let i = 0; i < this.size; i++) {
      if (this.contents[i] === undefined) {
        this.contents[i] = item;
        return;
      }
    }

    const size = this.size + 1;
    const newArray = new Array(size);

    let i = 0;

    for (i; i < size - 1; i++) {
      newArray[i] = this.contents[i];
    }

    newArray[i] = item;

    this.contents = newArray;
    this.size = size;
  }

  public removeAt(index: number): T {
    const size = this.size - 1;
    const newArray = new Array(size);
    const removed = this.contents[index];

    for (let i = 0; i < size + 1; i++) {
      if (i === index) continue;

      if (i < index) {
        newArray[i] = this.contents[i];
        continue;
      }

      newArray[i - 1] = this.contents[i];
    }

    this.contents = newArray;
    this.size = size;

    return removed;
  }

  public indexOf(item: T): number {
    for (let i = 0; i < this.size; i++) if (item === this.contents[i]) return i;

    return -1;
  }

  public print(): void {
    for (let i = 0; i < this.size; i++) {
      console.log(this.contents[i]);
    }
  }
}

const array = new MyArray<number>(3);

array.insert(10);
array.insert(20);
array.insert(30);

console.log(array.indexOf(30));
console.log(array.removeAt(1));
console.log(array.indexOf(30));

array.print();
