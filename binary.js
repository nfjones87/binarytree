class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key=key;
        this.value=value;
        this.parent=parent;
        this.left=null;
        this.right=null;
    }

    insert(key, value) {
        if(this.key==null) {
            this.key=key;
            this.value=value;
        }
        else if (key<this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key,value,this);
            }
            else {
                this.left.insert(key,value);
            }
        }
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key,value,this);
            }
            else {
                this.right.insert(key,value);
            }
        }
    }

    get(key) {
        if(this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.get(key);
        }
        else if (key > this.key && this.right) {
            return this.right.get(key);
        }
        else {
            throw new Error('Key error');
        }
    }

    remove(key) {
        if(this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if(key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key error');
        }
    }

    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if(node) {
                node.parent = this.parent;
            }
        }
        else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if(!this.left) {
            return this;
        }
        return this.left._findMin();
    }

}


//find height
function findHeight(tree){
    if (tree) {
        return 1 + Math.max(findHeight(tree.left), findHeight(tree.right));
    } else {
        return 0;
    }
}






let bst = new BinarySearchTree();

// bst.insert(0, 'e');
// bst.insert(1, 'a');
// bst.insert(2, 's');
// bst.insert(3, 'y');
// bst.insert(4, 'q');
// bst.insert(5, 'u');
// bst.insert(6, 'e');
// bst.insert(7, 's');
// bst.insert(8, 't');
// bst.insert(9, 'i');
// bst.insert(10, 'o');
// bst.insert(11, 'n');

//console.log(bst);

bst.insert(11, 'n');
bst.insert(55, 'n1');
bst.insert(7, 'n2');
bst.insert(1, 'n3');
// bst.insert(24, 'n4');
// bst.insert(6, 'n5');
// bst.insert(0, 'n6');
bst.insert(97, 'n7');

console.log(bst);






//console.log(findHeight(bst));


//determine if tree is binary search tree

function isBst(tree, min, max) {
    if (tree === null) {
        return true; 
    } 

    if((max !== null && tree.key > max) || (min !== null && tree.key < min) ) {
        return false;
    }
    if (!isBst(tree.left,min,tree.key) || (!isBst(tree.right,tree.key,max))) {
        return false;
    }
    return true;
}

console.log(isBst(bst));




