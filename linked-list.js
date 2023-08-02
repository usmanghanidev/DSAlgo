class LinkedList {
  constructor(value) {
    this.head = {
      value,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = {
      value,
      next: null,
    };

    this.tail.next = node;
    this.tail = node;
    this.length = ++this.length;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    const newHead = {
      value: newNode.value,
      next: this.head,
    };

    this.head = newHead;
    this.length = ++this.length;
    return this;
  }

  printList() {
    const arr = [];
    let currnetNode = this.head;

    while (currnetNode !== null) {
      arr.push(currnetNode.value);

      currnetNode = currnetNode.next;
    }

    return arr;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }

    const leader = this._traverseIndex(index - 1);
    const holdingPointer = leader.next;
    const newNode = new Node(value);

    const newNodeInsert = {
      value: newNode.value,
      next: holdingPointer,
    };

    leader.next = newNodeInsert;
    this.length++;

    return this.printList();
  }

  remove(index) {
    if (index < 1) {
      const newHead = this.head.next;
      this.head = newHead;

      return this.printList();
    } else if (index >= this.length) {
      return this.printList();
    }

    const leader = this._traverseIndex(index - 1);

    const unwanted = leader.next; // to remove
    const wanted = unwanted.next;

    leader.next = wanted;
    this.length--;

    return this.printList();
  }

  _traverseIndex(index) {
    let counter = 0;
    let currentHead = this.head;
    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }
    return currentHead;
  }

  reverse() {
    if (!this.head.next) {
      return this.printList();
    }
    let firstNode = this.head;
    let secendNode = firstNode.next;
    this.tail = this.head;

    while (secendNode) {
      const temp = secendNode.next;

      secendNode.next = firstNode;
      firstNode = secendNode;
      secendNode = temp;
    }

    this.head.next = null;
    this.head = firstNode;

    return this.printList();
  }
}

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length = ++this.length;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length = ++this.length;
    return this;
  }

  printList() {
    const arr = [];
    let currnetNode = this.head;

    while (currnetNode !== null) {
      arr.push(currnetNode);

      currnetNode = currnetNode.next;
    }

    return arr;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    }

    const newNode = {
      value,
      next: null,
      prev: null,
    };

    const leader = this._traverseIndex(index - 1);
    const follower = leader.next;

    newNode.prev = leader;
    leader.next = newNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index < 1) {
      const newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      this.length--;
      return this.printList();
    } else if (index >= this.length - 1) {
      const holdPointer = this.tail.prev;
      if (holdPointer) {
        holdPointer.next = null;
        this.tail = holdPointer;
        this.length--;
      }

      return this.printList();
    }
    const leader = this._traverseIndex(index - 1);

    const unwanted = leader.next;

    const wanted = unwanted.next;

    if (leader.next) {
      leader.next = wanted;
    }
    if (wanted.prev) {
      wanted.prev = leader;
    }

    this.length--;

    return this.printList();
  }

  _traverseIndex(index) {
    let counter = 0;
    let currentHead = this.head;
    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }
    return currentHead;
  }
}

const linkedList = new LinkedList(10);
linkedList.append(34);
linkedList.append(55);
linkedList.append(43);
linkedList.prepend(16);
linkedList.prepend(32);
linkedList.insert(2, 78);
linkedList.insert(1, 23);

console.log(linkedList.printList());

console.log(linkedList.reverse());
