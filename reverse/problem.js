
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    
    let  previous = null, current = head, next = null;
    
    while(current != null ){
        next = current.next
        current.next = previous
        previous = current
        current = next
    }
    // head = previous
    return previous

}

