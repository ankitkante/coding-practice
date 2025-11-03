// https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150


var RandomizedSet = function() {
    this.set = {}
    this.list = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.set.hasOwnProperty(val)){
        return false
    } else {
        this.list.push(val)
        this.set[val] = this.list.length-1
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.set.hasOwnProperty(val)){
        return false
    } else {
        let lastIndex = this.list.length - 1
        const lastItem = this.list[lastIndex]
        const itemIndex = this.set[val]
        this.list[itemIndex] = lastItem
        this.set[lastItem] = itemIndex
        this.list.pop()
        delete this.set[val]
        return true
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.list.length)

    return this.list[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */