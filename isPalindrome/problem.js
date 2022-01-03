const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let current = head, arr = [], N = 0;
    
    while(current){
        arr.push(current.data)
        current = current.next
        N++
    }
    for(var i=0; i<N; i++){
        if(arr[i] != arr[N-1-i])
        return false
    }
    return true
};
