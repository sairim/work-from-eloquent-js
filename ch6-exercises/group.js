class Group {
    constructor() {
        this.group = [];
    }

    has(value) {
        return this.group.includes(value)
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.group.splice(this.group.indexOf(value), 1);
        }
    }

    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false