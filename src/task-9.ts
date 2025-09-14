interface Container<T> {
  items: T[];
  addItem: (item: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [11, 45, 90],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: ["Egypt", "Germany", "Italy"],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}
