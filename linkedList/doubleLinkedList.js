class MyDoubleLinkedList{

    constructor(value){
        this.head = {
            value: value,
            previous: null,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){

        let newNode = {
            value: value,
            previous:null,
            next: null
        };
        
        this.tail.next = newNode;
        newNode.previous = this.tail
        
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        let newNode = {
            value: value,
            previous: null,
            next: null
        }
        newNode.next = this.head;
        this.head.previous = newNode;
        
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
        let newNode = {value: value, previous: null, next: null};
        
        
        //adicionando uma referencia para o novo nó
        currentNode.next = newNode;
        
        // o novo nó aponta para o nó anterior
        newNode.previous = currentNode;

        //adicionando ao novo nó o 'next' do nó anterior
        newNode.next = nextNode;

        //nextNode aponta para o newNode q agora é o anterior
        nextNode.previous = newNode;

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
            let newHead = this.head.next;
            newHead.previous = null; 
            this.head = newHead;

        }
        else if(index == this.length - 1){
            let currentNode = this.traverseToIndex(index - 1);
            currentNode.next = null;
            this.tail = currentNode;
        }else{

            let currentNode = this.traverseToIndex(index - 1);
            let nextNode = currentNode.next.next;
    
            currentNode.next = nextNode; 
            nextNode.previous = currentNode;   
        }
        
        this.length--;

    }

    showAll(){
        let values = [];
        let aux = this.head;
        for(let i = 0; i < this.length; i++){
            //console.log(i)
            console.log(aux)
            values.push(aux.value);
            aux = aux.next;
        }
        return values;
    }


}

let myLinkedList = new MyDoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(28);
myLinkedList.prepend(-100)

//console.log(myLinkedList.showAll());
//console.log(myLinkedList)

//console.log(myLinkedList)
//console.log(myLinkedList);

//myLinkedList.insert(4, -50);
myLinkedList.remove(4);
console.log(myLinkedList.showAll());
console.log(myLinkedList);