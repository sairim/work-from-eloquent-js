class Group {
    constructor() {
        this.members = [];
    }

    has(value) {
        return this.members.includes(value)
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        if (this.has(value)) {
            this.members.splice(this.members.indexOf(value), 1);
        }
    }

    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index >= this.group.members.length) {
            return { done: true };
        }
        const value = this.group.members[this.index];
        this.index++;
        return { value, done: false };
    }
}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c