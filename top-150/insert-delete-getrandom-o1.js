// https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150


var RandomizedSet = function() {
    this.set = {}

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(Object.keys(this.set).includes(val.toString())){
        return false
    } else {
        this.set[val] = val
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!Object.keys(this.set).includes(val.toString())){
        return false
    } else {
        delete this.set[val]
        return true
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const list = Object.keys(this.set)
    const randomIndex = Math.floor(Math.random() * list.length)

    return this.set[list[randomIndex]]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */