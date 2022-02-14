var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        console.log("false")
    }
    
};

ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])
ladderLength("hit", "cog", ["hot","dot","dog","lot","log"])