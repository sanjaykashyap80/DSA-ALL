
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    var node = new LinkedListNode(position)
    
    if(position > 0 && position > this.size){
        return head;
    }
    let current = head;
    let previous;
    let count = 0;
    
    if(position === 0){
        head = current.next
    }
    else{
        while(count < position){
            count++
            previous = current
            current = current.next
        }
        previous.next = current.next
    }
    return head
}

