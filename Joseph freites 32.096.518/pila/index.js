class stack{
    constructor() {
        this.stack ={};
        this.top = 0;
    };

    push(data) {
        this.top++;
        this.stack[this.top] = data;

};

pop () {
    let deletedData;

    if (this.top) {
        deletedData = [this.stack];
        delete this.stack[this.top];
        this.top--;
        return deletedData;
    };
};

getSize() {
    return this.top;
};

isEmpty() {
    if (this.getSize()) {
        return true;
    } else {
        return false;

    }
};

peek () {
    if (this.isEmpty()) {
        return null;
    };

    return this.stack[this.top];
};

print() {
    let result = '';
    for (let i = this.top; i > 0; i--) {
        result += this.items[i] + ' ';
    };
    return result;
  };
};

const stack = new stack();
stack.push('Objeto #1');
stack.push('Objeto #2');
stack.push('Objeto #3');
console.log(stack.print()); 
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



console.log(stack.peek());
//console.log(stack.pop()):// llama para eliminar un elemento del stack

console.log(stack.getSize()); //nos muestra el tamaño del stack


console.log(stack.isEmpty()); 




console.log(stack); //imprimira la lista

console.log(stack.print());








    
