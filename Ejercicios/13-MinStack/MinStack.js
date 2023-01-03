function Node (val) {
  this.min = null;
  this.value = val;
  this.next = null;
}

function MinStack () {
  this.top = null;
}

MinStack.prototype.push = function(val) {
  const prevTop = this.top
  this.top = new Node(val)
  this.top.next = prevTop
  if(prevTop === null) this.top.min = val
  else if(val < prevTop.min) this.top.min = val
  else this.top.min = prevTop.min;
};

MinStack.prototype.pop = function() {
  const popped = this.top
  this.top = this.top.next
  return popped.value
};

MinStack.prototype.peek = function() {
  return this.top.value
};

MinStack.prototype.min = function() {
  return this.top.min
  // let min = Infinity
  // let current = this.top
  // while (current.next) {
  //   if(current.value < min) min = current.value
  //   current = current.next    
  // }
  // return min;
};


module.exports = {
  Node,
  MinStack
}
const node = new Node(4)
console.log(node)

const minStack = new MinStack()
