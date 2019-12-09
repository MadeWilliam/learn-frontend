function solution(S) {
    let result = 0;
    let sentences = '';
    let counterArr = [];

    sentences = S.split(/[\.!\?]+/)

    if (sentences.length < 1) {
        return 0;
    } else if (
        sentences.length === 1 &&
        (sentences.substring().includes(".") ||
            sentences.substring().includes("?") ||
            sentences.substring().includes("!"))) {
        return 0;
    }

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i];
        if (sentence[0] === " ") sentence = sentence.slice(1)
        let wordCounter = 1;
        for (let j = 0; j < sentence.length; j++) {
            if (sentence[j] === " " 
            && sentence[j + 1] !== " " 
            && sentence[sentence.length-1] !== " "){
                wordCounter += 1
            }
        }
        counterArr.push(wordCounter)
    }
    result = (Math.max(...counterArr))
    return result;
}

// 2

function solution(X, Y, A) {
    var N = A.length;
    var result = -1;
    var nX = 0;
    var nY = 0;
    for (var i = 0; i < N; i++) {
        if (A[i] == X)
            nX += 1;
        else if (A[i] == Y)
            nY += 1;
        if (nX == nY && (nX!=0 && nY!=0)) 
            result = i;
    }
    return result;
}

// 3

function solution() {
    const colors = document.querySelectorAll("td")
    let result = "";

    for (color of colors) {
        if (color.style.color !== color.style.backgroundColor) result += color.textContent
    }

    return result
}

