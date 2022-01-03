
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    
    /* Function to create a new node with given data */
function newNode(data) 
{ 
    var new_node = new LinkedListNode(); 
    new_node.data = data; 
    new_node.next = null; 
    return new_node; 
}
    
    function reverse(head) { 
    var prev = null; 
    var current = head; 
    var next; 
    while (current != null) 
    { 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    } 
    return prev; 
}

  // res is head node of the resultant list 
  head = reverse(head)
    var res = head; 
    var temp, prev = null; 
  
    var carry = 1, sum; 
  
    while (head != null) //while both lists exist 
    { 
        // Calculate value of next digit in resultant list. 
        // The next digit is sum of following things 
        // (i) Carry 
        // (ii) Next digit of head list (if there is a 
        // next digit) 
        sum = carry + head.data; 
  
        // update carry for next calculation 
        carry = (sum >= 10)? 1 : 0; 
  
        // update sum if it is greater than 10 
        sum = sum % 10; 
  
        // Create a new node with sum as data 
        head.data = sum; 
  
        // Move head and second pointers to next nodes 
        temp = head; 
        head = head.next; 
    } 
  
    // if some carry is still there, add a new node to 
    // result list. 
    if (carry > 0) 
        temp.next = newNode(carry); 
  
    // return head of the resultant list 
    return reverse(res);
    
};

