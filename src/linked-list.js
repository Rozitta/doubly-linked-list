const Node = require('./node');

class LinkedList {
    constructor() {
        this.arrList = [];
        this.length = this.arrList.length;
        this._tail;
        this._head;

    }

    append(data) {

        let instance = new Node(data);
        this.arrList.push(instance);
        this.length = this.arrList.length;
        this._tail = this.arrList[this.arrList.length -1];
        this._head = this.arrList[0];
        return this;
    }

    head() {
        if(this.arrList.length == 0)return null;
        return this._head.data
    }

    tail() {
        if(this.arrList.length == 0)return null;
        return this._tail.data
    }

    at(index) {
        return this.arrList[index].data
    }

    insertAt(index, data) {
        let instance = [new Node(data)];
        let arrStart = this.arrList.slice(0,index);
        let arrEnd = this.arrList.slice(index);
        let arrRess = arrStart.concat(instance,arrEnd);
        this.arrList = arrRess;
        this.length = this.arrList.length;
        this._tail = this.arrList[this.arrList.length -1];
        this._head = this.arrList[0];

    }

    isEmpty() {
        return this.arrList.length <= 0 ? true : false;
    }

    clear() {
        this.arrList = [];
        this.length = this.arrList.length;
        return this;


    }

    deleteAt(index) {

        this.arrList.splice(index,1);
        this.length = this.arrList.length;
        this._tail = this.arrList[this.arrList.length -1];
        this._head = this.arrList[0];
        return this;

    }

    reverse() {
        this.arrList.reverse();
        this._tail = this.arrList[this.arrList.length -1];
        this._head = this.arrList[0];
        return this;

    }

    indexOf(data) {
        let res = - 1;
        for(let i = 0; i < this.arrList.length; i++){
            if(this.arrList[i].data == data){
                return i
            }};
        return res;



    }
}

module.exports = LinkedList;
