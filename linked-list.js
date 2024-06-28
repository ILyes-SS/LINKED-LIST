class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(value) {
    let prevHead = this.head;
    this.head = new Node(value);
    this.head.next = prevHead;
  }
  append(value) {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }
  size() {
    let temp = this.head;
    let size = 0;
    while (temp != null) {
      temp = temp.next;
      size++;
    }
    return size;
  }
  getHead() {
    return this.head;
  }
  tail() {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp;
  }
  at(index) {
    let temp = this.head;
    let i = 0;
    while (temp.next != null && i != index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }
  pop() {
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  contains(value) {
    let temp = this.head;
    while (temp.next != null) {
      if (temp.value == value) return true;
      temp = temp.next;
      if (temp.value == value) return true;
    }
    return false;
  }
  find(value) {
    let temp = this.head;
    let i = 0;
    while (temp.next != null) {
      if (temp.value == value) return i;
      temp = temp.next;
      i++;
      if (temp.value == value) return i;
    }
    return null;
  }
  toString() {
    let string = "";
    let temp = this.head;
    while (temp != null) {
      string += `(${temp.value}) ->`;
      temp = temp.next;
    }
    string += `null`;
    return string;
  }
  insertAt(value, index) {
    let p = this.head;
    let r = p.next;
    let i = 1;
    if (index == 0) {
      let prevHead = this.head;
      this.head = new Node(value);
      this.head.next = prevHead;
    }
    while (r != null && i != index) {
      p = r;
      r = p.next;
      i++;
    }
    if (i == index) {
      p.next = new Node(value);
      p.next.next = r;
    } else return;
  }
  removeAt(index) {
    let p = this.head;
    let r = p.next;
    let i = 1;
    if (index == 0) {
      this.head = this.head.next;
    }
    while (r != null && i != index) {
      p = r;
      r = p.next;
      i++;
    }
    if (i == index) {
      p.next = r.next;
    } else return;
  }
}
class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.prepend(6);
list.prepend(5);
list.prepend(4);
list.append(7);
console.log(list.size());
console.log(list.at(0));
console.log(list.tail());
console.log(list.getHead());
console.log(list.contains(7));
console.log(list.find(7));
console.log(list.pop());
console.log(list.size());
console.log(list.tail());
console.log(list.contains(10));
console.log(list.find(4));
list.toString();
list.insertAt(10, 0);
list.toString();
list.removeAt(0);
