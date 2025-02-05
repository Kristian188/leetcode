// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


function arrayToList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

function sum(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        let currentSum = x + y + carry;
        carry = Math.floor(currentSum / 10);

        current.next = new ListNode(currentSum % 10);
        current = current.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const list1 = arrayToList(l1);
const list2 = arrayToList(l2);

const result = sum(list1, list2);

function listToArray(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

console.log(listToArray(result));
