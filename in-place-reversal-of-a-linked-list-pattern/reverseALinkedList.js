/* 
Given the head of a Singly LinkedList, reverse the LinkedList. 
Write a function to return the new head of the reversed LinkedList.

level: easy
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write("Nodes of original LinkedList are: ");
head.print_list();
result = reverse(head);
process.stdout.write("Nodes of reversed LinkedList are: ");
result.print_list();

/*
Time complexity:
The time complexity of our algorithm will be O(N), where ‘N’ is the total number of nodes in the LinkedList.

Space complexity:
We only used constant space, therefore, the space complexity of our algorithm is O(1).
*/
