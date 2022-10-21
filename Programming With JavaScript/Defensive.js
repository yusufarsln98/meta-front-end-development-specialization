function letterFinder(word, match) {
    try{
        if (typeof(word) != 'string') {
            throw new ReferenceError("Invalid first argument");
        }
        if (typeof(match) != 'string') {
            throw new ReferenceError("Invalid second argument");
        }
        if (word.length < 2) {
            throw new ReferenceError("Length of first argument must be at least 2");
        }
        if (match.length != 1) {
            throw new ReferenceError("Length of second argument must be 1");
        }
        
        for (i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    catch(err) {
        console.log(err.message);
    }
}

letterFinder(21, '31');
console.log('End of program');