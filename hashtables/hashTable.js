class HashTable{
    constructor(size){
        this.data = new Array(size);
        this.chaves = [];
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            ///console.log(hash);
        }
        return hash;
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.data[index]) this.data[index] = []; 
        this.data[index].push([key, value]);
        this.chaves.push(key);
    }

    get(key){
        let index = this._hash(key);
        let currrent = this.data[index];
        if(currrent){
            for(let i = 0; i < currrent.length; i++){
                if(currrent[i][0] === key) return currrent[i][1];
            }
            
        }
        
        return undefined;
    }

    /*keys(){
        let keys = [];
        
        for(let i = 0; i < this.data.length; i++){
            let current = this.data[i];
            if(current){
                for(let j = 0; j < current.length; j++){
                    keys.push(current[j][0]);
                }
            }
        }

        return keys;
    }*/

    keys(){
        return this.chaves;
    }

    delete(key){
        if(this.chaves.includes(key)){
            let index = this._hash(key);
            let current = this.data[index];
            for(let i = 0; i < current.length; i++){
                if(current[i][0] == key) current.splice(i, 1);   
            }
        }
        this.chaves.splice(this.chaves.indexOf(key), 1);
    }
}

let hash = new HashTable(10);
hash.set("maycon", 20);
hash.set("maycon1", 20);
hash.set("david", new HashTable(10));
hash.set("jean", 26);
hash.set("karen", 48);

hash.delete("karen")

for(let key of hash.keys()){
    console.log(key + " = ", hash.get(key));
}

console.log(hash.data)