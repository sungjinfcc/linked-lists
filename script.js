class LinkedList{
    constructor(){
        this.head = null;
    }
    tail(){
        let node = this.head;
        if(!node){
            return null;
        }
        while(node.nextNode){
            node = node.nextNode;
        }
        return node;
    }
    append(value){
        const newNode = new Node(value);
        if(this.tail()){
            this.tail().nextNode = newNode;
        }else{
            this.head = newNode;
        }
    }
    prepend(value){
        const newNode = new Node(value);
        if(this.head){
            newNode.nextNode = this.head;
        }
        this.head = newNode;
    }
    
    size(){
        let length = 0;
        let node = this.head;
        while(node){
            length++;
            node = node.nextNode;
        }
        return length;
    }
    at(index){
        let node = this.head;
        for(let i=0; i<index; i++){
            node = node.nextNode;
        }
        return node;
    }
    pop(){
        let node = this.head;
        let prevNode = null;
        while(node.nextNode){
            prevNode = node;
            node = node.nextNode;
        }
        prevNode.nextNode = null;
        this.tail = prevNode;

    }
    contains(value){
        let node = this.head;
        while(node){
            if(node.value == value){
                return true;
            }else{
                node = node.nextNode;
            }
        }
        return false;
    }
    find(value){
        let node = this.head;
        let i = 0;
        while(node){
            if(node.value == value){
                return i;
            }else{
                node = node.nextNode;
            }
            i++;
        }
        return null;
    }
    toString(){
        let string = "";
        let node = this.head;
        while(node){
            string += `(${node.value}) -> `
            node = node.nextNode;
        }
        string += "null"
        return string;
    }
    insertAt(value, index){
        const newNode = new Node(value);
        let node = this.head;
        for(let i=0; i<index-1; i++){
            node = node.nextNode;
        }
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
    }
    removeAt(index){
        let node = this.head;
        for(let i=0; i<index-1; i++){
            node = node.nextNode;
        }
        node.nextNode = node.nextNode.nextNode;
    }
}

class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.nextNode = next;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.append(3);
myLinkedList.append(22);
myLinkedList.append(1245234);
myLinkedList.prepend(2);
myLinkedList.prepend(616);
myLinkedList.prepend(5);

console.log(`size: ${myLinkedList.size()}, head: ${myLinkedList.head.value}, tail: ${myLinkedList.tail.value}, at(3): ${myLinkedList.at(3).value}, contains(616): ${myLinkedList.contains(616)}, find(616): ${myLinkedList.find(616)}`);
console.log(myLinkedList.toString());

myLinkedList.pop();
console.log(myLinkedList.toString());

myLinkedList.insertAt(350, 2);
console.log(myLinkedList.toString());

myLinkedList.removeAt(3);
console.log(myLinkedList.toString());