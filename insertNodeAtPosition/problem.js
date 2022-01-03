
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let node = new LinkedListNode(data)
    let count = 0;
    let current = head;
    if(position == 0){
        let val = head;
        head = node
        head.next = val
    }
    while(current.next){
        count++
        if( count === position){
            let prev = current
            let next = current.next;
            let val = node;
            prev.next = val
            val.next = next
        }
        current = current.next
    }
    return head
}

