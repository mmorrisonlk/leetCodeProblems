var partitionLabels = function(s) {
    let mapOfLastLetterIndex = new Map();

    for (let i = 0; i < s.length; i++) {
        mapOfLastLetterIndex.set(s.charAt(i), i);
    }

    

    console.log(mapOfLastLetterIndex)
};

partitionLabels("ababcbacadefegdehijhklij")