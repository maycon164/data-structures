class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null;
        this.length = 0;
    }

    insert(value){
        let newNode = new Node(value);
        
        if(this.length == 0){
            this.root = newNode;
            this.length++;
            return this;
        }
        
        let currentNode = this.root;
        
        while(true){
            
            if(value > currentNode.value){
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    this.length++;
                    break;
                }else{
                    currentNode = currentNode.right;
                }
            }else if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    this.length++;
                    break;
                }else{
                    currentNode = currentNode.left;
                }
            }else{
                return "item repetido";
            }
            
        }
    
    }

    lookup(value){
        let currentNode = this.root;
        
        if(!currentNode) return undefined;

        while(currentNode){
            if(value == currentNode.value) return currentNode;
            else if(value > currentNode.value) currentNode = currentNode.right;
            else currentNode = currentNode.left
        }
        return undefined;
    }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(20));
console.log(tree.lookup(9));

console.log(tree.lookup(4));

//console.log(tree.insert(15));

//console.log(tree.root.right);

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

//console.log(JSON.stringify(traverse(tree.root)));