<<<<<<< HEAD
function findMiddle(list) {
  // Both fast and slow start at the head
  let slow = list.head;
  let fast = list.head;
  // prev starts at null
  let prev = null;

  // Loop through the list
  while (fast !== null && fast.next !== null) {
    // Move fast forward by 2 nodes
    fast = fast.next.next;
    // Move slow forward by 1 node
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    // Even number of nodes
    return prev.next;
  } else {
    // Odd number of nodes
    return slow;
  }
}

module.exports = findMiddle;
=======
function findMiddle(list) {
  // Both fast and slow start at the head
  let slow = list.head;
  let fast = list.head;
  // prev starts at null
  let prev = null;

  // Loop through the list
  while (fast !== null && fast.next !== null) {
    // Move fast forward by 2 nodes
    fast = fast.next.next;
    // Move slow forward by 1 node
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    // Even number of nodes
    return prev.next;
  } else {
    // Odd number of nodes
    return slow;
  }
}

module.exports = findMiddle;
>>>>>>> 928dda6703383db7c126a8e3479cdf2716e07933
