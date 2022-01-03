const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    
  var node = new LinkedListNode(data);
  let current;
  
  if(!head){
      node.next = head;
      head = node
  }
  else {
      current = head;
      while(current.next){
          current = current.next
      }
      current.next = node;
  }
  return head
}


