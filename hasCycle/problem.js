
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
      // Set variable to store distinct nodes
    let set = new Set()
    // for traversing, initialize current with head node
    let current = head
    
    //traverse the linked list
    while(current){
        if(set.has(current)){
            // if duplication occurs, return true
            return true
        }else{
            set.add(current)
        }
        
        current = current.next
    }
    // traverse is completed, cycle not found
    return false
};

