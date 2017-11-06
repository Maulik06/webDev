module.exports = {
simplify:(text)=>
{
    if(typeof text !== 'string')
    {
        throw 'Not valid text';
    }
    else if(text.trim().length === 0)
    {
        throw 'File does not contains any content';
    }
    return text.toLowerCase()
        .replace(/[^0-9a-z]/g, ' ')
        .replace('\n',' ')
        .replace('\t',' ')
        .replace(/ +(?= )/g,'')
        .trim();
},

createMetrics:(text)=>
{
    if(typeof text !== 'string')
    {
        throw 'Not valid text';
    }
    else if(text.trim().length === 0)
    {
        throw 'File does not contains any content';
    }
    
    let textArray = text.split(' ');
    let textDict = {};
    let longWordCount = 0;
    let avgWordLength = 0;
    for(let i=0;i<textArray.length;i++)
    {
        avgWordLength = avgWordLength + (textArray[i].length);
       
        if(textArray[i].length >= 6)
        {
            longWordCount ++;
        }
        if(textArray[i] in textDict)
        {
            textDict[textArray[i]] = textDict[textArray[i]] + 1;
        }
        else
        {
            textDict[textArray[i]] = 1;
        }
        
    }
    let TextTotalLetter = avgWordLength;
    avgWordLength = avgWordLength / textArray.length;

    /*textUniqueWords = 0;
    
    for(word in textDict)
    {
        console.log(word);
        if(textDict[word] === 1)
        {
            textUniqueWords++;
        }
    }*/
    

    return {
        totalLetters: TextTotalLetter,
        totalWords: textArray.length,
        uniqueWords: Object.keys(textDict).length,
        longWords: longWordCount,
        averageWordLength: avgWordLength,
        wordOccurrences: textDict
    };

}
};
