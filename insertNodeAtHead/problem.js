
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    var node = new LinkedListNode(data);
   
    if(!head)
     node.next = null 
     else
     node.next = head
     
    //  console.log(data)
     
     return node;
    
}

