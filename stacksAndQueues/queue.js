const Node = require('./node');

class Queue{
    
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;

        }

        this.length++;
    }

    dequeue(){
        if(!this.first) return -1;

        let value = this.first.value;

        if(this.first == this.last){
            this.last = null;    
        }

        this.first = this.first.next;
        this.length--;
        return value;
    }

    peek(){
        if(this.first) return this.first.value;
        return -1;
    }

}

let queue = new Queue();
queue.enqueue('Maycon');
queue.enqueue('Felipe');
queue.enqueue('Mendoza');

console.log(queue);

console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
queue.dequeue();

console.log(queue.peek());