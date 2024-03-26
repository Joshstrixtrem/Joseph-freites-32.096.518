class taill {
    constructor(vlor) {
        this.vlor = vlor;
        this.next = null;
    }
}

class tail {
    constructor() {
        this.heat = null;
        this.tail = null;
        this.longitued = 0;
    }

    putinode(vlor) {
        const newnode = new Node (vlor);
        if (this.head) {
            this.tail.next = newnode;

            this.tail = newnode;
        } else {
            this.head = newnode;
            this.tail = newnode;
        }
        this.longitued++;
    }



    empty() {
        return this.longitued === 0;
    }

    size() {
        return this.longitued;
    }

    printcola() {
        let actually = this.head;
        while (actually) {
            console.log(actually.vlor);
            actually = actually.next


        }

    }

}

const cola = new cola();
cola.putinode(9);
cola.putinode(10);
cola.putinode(8);

console.log(" elements in node");
cola.printcola();
console.log("size in queue", cola.size());
console.log(" queue empty",  cola.itsempty());
