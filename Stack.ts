'use strict';

export default class Stack<E> {
    private size: number = 0;
    private data: Array<E> = [];

    public push(val: E): void {
        this.data[this.size++] = val;
    }

    public pop(): E | null {
        return !this.size
            ? null
            : this.data[--this.size];
    }

    public peek(): E | null {
        return !this.size
            ? null
            : this.data[this.size - 1]
    }

    public length(): number {
        return this.size;
    }
}