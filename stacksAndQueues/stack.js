const Node = require('./node');

class Stack{
    constructor(){
        this.top;
        this.bottom;
        this.length = 0;
    }

    push(value){
        let node = new Node(value);
        if(this.length == 0){
            this.top = node;
            this.bottom = node;
        }else{
            node.next = this.top;
            this.top = node;

        }
        this.length++;
    } 

    pop(){
        if(!this.top){
            return null;
        }
 
        if(this.top === this.bottom) this.bottom = null;
 
        let value = this.top.value;
        this.top = this.top.next;
        this.length--;
        

        return value;

    }

    peek(){

        if(this.top){
            return this.top.value;
        }
    }

    /*isEmpty(){
        return this.top;
    }*/
}

let stack = new Stack();

stack.push("Discord");
stack.push("Udemy");
stack.push("google");

console.log(stack.pop());
console.log(stack.pop());

stack.push("youtube");
stack.push("twiter");


console.log(stack.pop());
console.log(stack.pop());
console.log(stack)

console.log(stack.pop());