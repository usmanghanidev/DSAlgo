class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
      this.length++;

      return this;
    }

    const holdingOldTop = this.top;

    this.top = node;
    this.top.next = holdingOldTop;

    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;

    this.length--;

    return this;
  }
}

const stack = new Stack();
stack.push(444);
stack.push(232);
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(1);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
