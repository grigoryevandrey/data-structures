export class MyArray<T> {
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
