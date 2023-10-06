class customArray {
    constructor(...elements) {
        this.size = elements.length;

        for(let i = 0; i<this.size; i++) {
            this[i] = elements[i];
        }
       
    }

    push(element) {
        this[this.size++] = element;
    }

    pop() {
        delete this[--this.size];
    }

    top() {
        console.log(this[this.size - 1], 'line 20')
    }

    print() {
        let arr = []
        for(let i = 0; i<this.size; i++) {
            arr.push(this[i]);
        }
        console.log(arr)
    }

    printReverse() {
        let arr = []
        for(let i = this.size - 1; i >= 0; i--) {
            arr.push(this[i]);
        }
        console.log(arr)
    }
}

let arr = new customArray(1,2,3,4,5);



// Create a custom Array constructor which will return an array object.
// It should have a property size based on the length of arguments passed.
// Add the arguments as key(index) value pairs in the Array object.
// Use the “.prototype” property to add custom methods to the Array.
// Add following methods :-
// .push // Should add an element at the end.
// .pop() // Should remove an element from the end.
// .top() // Should return the element at the last index.
// .print() // Should print the elements in a single line (e.g. [1,2,3,4]).
// .printReverse() // Should print the elements in a single line in reverse order.
// .size // Should return the length of the stack