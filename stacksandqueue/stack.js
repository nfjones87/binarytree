class Stack {
    constructor() {
        this.top = null;
    }
    
   push(data) {
        if (!this.top) this.top = this._createNode(data);
        else this.top = this._createNode(data, this.top);
    }
    
   pop() {
        const topVal = this.top;
        try {
            this.top = this.top.next;
        } catch(e) {
            return null;
        }
        return topVal.data;
    }
    
   peek() {
        if (!this.top) return null;
        return this.top.data;
    }
    
   display() {
        let nextData = this.top;
        while (nextData !== null) {
            console.log(nextData.data);
            nextData = nextData.next;
        }
    }
    
   _createNode(data=null, next=null) {
        return {
            data,
            next
        };
    }
}


function checkPali(str) {
    const T = new Stack();
    for(let i=0; i<str.length; i++) {
        T.push(str.slice(i, i+1));
    }
    let newStr = "";
    while(T.top !== null){
        newStr += T.pop();
    }
    console.log(newStr);
    return newStr === str;
}


console.log(checkPali("Nick"));