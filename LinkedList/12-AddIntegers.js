/**
 * l1 = 1 -> 0 -> 9 -> 9 -> null
 * l2 = 7 -> 3 -> 2 -> null
 * r = 8 -> 3 -> 1-> 0 -> 1 -> null
 */

function addIntegers(list1, list2) {
  let carry = 0;
  let result = new LinkedList();

  while (list1 || list2 || carry > 0) {
    let first = list1 ? list1.data : 0;
    let second = list2 ? list2.data : 0;

    let sum = first + second + carry;
    result.insertAtTail(sum % 10);
    carry = Math.floor(sum / 10);

    if (list1) {
      list1 = list1.nextElement;
    }
    if (list2) {
      list2 = list2.nextElement;
    }
  }
  return result;
}
