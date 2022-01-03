const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    
    let L = 0, current = head
    while(current != null){
        L++
        current = current.next
    }
    // console.log(L)
    let len = L-n;
    current = head
    
    while(len > 0){
        len--
        current = current.next
    }
    return current.data
    

}
