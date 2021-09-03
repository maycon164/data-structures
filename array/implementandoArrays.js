class MeuArray{
    
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop(){
        const item = this.data[this.length - 1];
        this.length--;
        delete this.data[this.length];
        return item;
    }

    delete(index){
        const item = this.get(index);
        this.shiftPosition(index);
        return item;
    }

    shiftPosition(index){
        
        for(let x = index; x < this.length - 1; x++){
            this.data[x] = this.data[x + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const array = new MeuArray();
array.push("Maycon");
array.push("jean");
array.push("Davi");
let lastItem = array.pop();

console.log(array);
console.log(lastItem);

console.log(array.get(1))

array.push("Mendoza");
array.push("Renan");
array.push("Marcio");

console.log("Antes ", array);
console.log(array.delete(3))
console.log("Depois ", array);