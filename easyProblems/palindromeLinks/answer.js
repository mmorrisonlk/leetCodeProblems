/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let test = [head.val]
    while(head.next !== null){
    head = head.next;
    test.push(head.val)
    }
    let array = test.slice()
    let yarra = []
    for (let i = 0; i < test.length; i++) {
        // console.log("What?")
        let temp
        temp = array.pop()
        // console.log(temp)
        yarra.push(temp)        
    }
    // console.log("Head",head.toString())
    // console.log("Array",array)
    // console.log("Yarra",yarra.toString())
    if (test.toString() === yarra.toString()){
        return true
    }
    else {
        return false
    }
};