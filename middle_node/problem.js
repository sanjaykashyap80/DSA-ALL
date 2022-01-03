const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
     let L = 0, current = head
    while(current != null){
        L++
        current = current.next
    }
    let mid = Math.ceil(L/2);

    current = head
    
    while(L > mid){
        L--
        current = current.next
    }
    return current.data
    
};

