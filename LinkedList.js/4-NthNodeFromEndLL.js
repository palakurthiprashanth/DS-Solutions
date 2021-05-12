/**
 1. Move endNode forward n times, while nthNode stays at the head.
 2. Check if n is in the bounds of the list.
 3. Move pointers simultaneously after n nodes.
 4. When endNode reaches the end, nthNode is one the Nth position from the end.
 5. Return the node’s value
 */

// Tc= O(n).
function NthNodeFromEnd(list, n) {
  let nthNode = list.getHead(); //This iterator will reach the nth node
  let endNode = list.getHead(); //This iterator will reach the end
  let count = 0;

  while (count < n) {
    if (endNode === null) {
      console.log('Out of Bounds');
      return null;
    }
    endNode = endNode.nextElement;
    count++;
  }

  while (endNode !== null) {
    endNode = endNode.nextElement;
    nthNode = nthNode.nextElement;
  }

  if (nthNode !== null) {
    return nthNode;
  } else {
    return null;
  }
}
