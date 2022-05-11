var hasCycle = function(head) {
  if (head === null) return false;
  let pointer1 = head
  let pointer2 = head.next
  while (pointer2 != null) {
    if (pointer1 === pointer2) {
      return true
    } else if (pointer2.next === null) {return false};
    pointer1 = pointer1.next
    pointer2 = pointer2.next.next
  }
  return false
};
