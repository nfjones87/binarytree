class Queue {
    constructor() {
        this.first=null;
        this.last=null;
    }

    _createNode(data=null, next=null, prev=null){
        return {
            data,
            next,
            prev
        };
    }

    enqueue(data){
        const node = this._createNode(data);

        if(this.last){
            node.next = this.last;
            this.last.prev = node;
        }
        this.last = node;
        if(this.first === null){
            this.first = node;
        }
    }

    dequeue(){
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = node.prev;

        if(node === this.last) {
            this.last = null
        }
        return node.data
    }

}

function display() {
    let node = q.first;
    while(node !== null) {
        console.log(node.data);
        node = node.prev;
    }
}


function dancer(arr) {
let fQueue = new Queue();
let mQueue = new Queue();

arr.forEach(person => {
    person = person.split(' ')
    const gender = person[0];
    const name = person[1];
    if (gender === 'F') {
        fQueue.enqueue(name);
        return;
    }
    mQueue.enqueue(name);
})
// 2 queues are now full

while (fQeueue && mQueue) {
    console.log(
        `Female dancer is: ${fQueue.dequeue()} and the male dancer is ${mQueue.dequeue()}`
   )
}

let myArr = ["F Jane", "M Frank", "M John", "M Sherlock", "F Madonna", "M David", "M Christopher", "F Beyonce"]

console.log(dancer(myArr));







