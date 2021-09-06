const Node = require('./node');

class Stack{
    constructor(){
        this.data = new Array();
        this.length = this.data.length;
    }

    push(value){
        this.data.push(value);

    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.length];
    }
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

console.log(stack.peek());