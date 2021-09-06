//Implementando uma 'queue' usando 'stacks';
/*Implement a first in first out (FIFO) queue using only two stacks. 
The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).*/

//STACK CLASS
class Stack{
    constructor(){
        this.data = [];
        this.length = 0;
        
    }

    push(value){
        this.data.push(value);
        this.length++;
    }

    pop(){
        this.length--;
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }
}

//OUR QUEUE
class Queue{

    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
        this.length = 0;
    }

    // enqueue
    push(value){
        this.s1.push(value);
        this.length++;
    }

    pop(){
        if(this.length == 0) return undefined;

        this.fillStack(this.s1, this.s2);
        let value = this.s2.pop();
        this.fillStack(this.s2, this.s1);
        this.length--;
        return value;
    }

    fillStack(s1, s2){
        while(s1.length != 0){
            s2.push(s1.pop());
        }
    }

}

const queue = new Queue();

queue.push('Maycon');
queue.push('Felipe');

console.log(queue.pop());
queue.push('Mendoza');

console.log(queue.pop());
queue.push('Huanca')
console.log(queue.pop());

console.log(queue.pop());

console.log(queue.pop());