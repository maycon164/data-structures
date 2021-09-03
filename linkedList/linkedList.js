class MyLinkedList{

    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){

        let newNode = {
            value: value,
            next: null
        };
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        let newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
        if(index == 0){
            this.prepend(value);
            return;
        } 
        
        if(index >= this.length){
            this.append(value);
            return;
        } 
        
        if(index < 0 || index > this.length) return false;

        let currentNode = this.traverseToIndex(index - 1);
        let nextNode = currentNode.next;
        let newNode = {value: value, next: null};
        
        //adicionando uma referencia para o novo nó
        currentNode.next = newNode;
        //adicionando ao novo nó o 'next' do nó anterior
        newNode.next = nextNode;

        this.length++;
    }

    traverseToIndex(index){
        let aux = this.head;

        for(let i = 0; i < index; i++){
            aux = aux.next;
        }

        return aux;
    }

    remove(index){
        if(index < 0 || index > this.length) return false;

        if(index == 0) {

            this.head = this.head.next;

        }else{

            let currentNode = this.traverseToIndex(index - 1);
            let nextNode = currentNode.next.next;
    
            currentNode.next = nextNode;    
        }
        
        this.length--;

    }

    showAll(){
        let values = [];
        let aux = this.head;
        for(let i = 0; i < this.length; i++){
            //console.log(i)
            values.push(aux.value);
            aux = aux.next;
        }
        return values;
    }


}

let myLinkedList = new MyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(28);
myLinkedList.prepend(-100)
console.log(myLinkedList.showAll());

//console.log(myLinkedList)
//console.log(myLinkedList);

myLinkedList.insert(4, -50);
myLinkedList.remove(5);
console.log(myLinkedList.showAll());
console.log(myLinkedList);