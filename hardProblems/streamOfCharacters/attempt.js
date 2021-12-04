/**
 * @param {string[]} words
 */
 const Stream = function (key) {
    this.key = key;
  
    this.parent = null;
  
    this.children = {};
  
    this.end = false;
  
    this.getWord = function () {
      let output = [];
      let node = this;
  
      while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
      }
  
      return output.join('');
    };
  };
  
  var StreamChecker = function (words) {
      this.root = new Stream(null)
      
      this.insert = function(words) {
          let node = this.root
          for (let i = 0; i < words.length; i++) {
            if (!node.children[words[i]]) {
              node.children[words[i]] = new StreamChecker(word[i]);
              node.children[words[i]].parent = node;
            }
  
            node = node.children[words[i]];
  
            if (i == words.length - 1) {
              node.end = true;
            }
          }
      }
  };
  /** 
   * @param {character} letter
   * @return {boolean}
   */
  StreamChecker.prototype.query = function(letter) {
      this.contains = function (letter) {
          let node = this.root;
          
          for(let i = 0; i < letter.length; i++) {
              if (node.children[word[i]]) {
                  node = node.children[word[i]];
              }
              else {
                  return false;
              }
          }
          
          return node.end
      }
  };
  
  /** 
   * Your StreamChecker object will be instantiated and called as such:
   * var obj = new StreamChecker(words)
   * var param_1 = obj.query(letter)
   */