# Lab3

# Asynchronous Code, Files, and Promises

Hints:
Async methods return promises, always.<br/>
You do not need to manually create a promise anywhere.<br/>
Throwing inside an async function causes the method to return a rejected promise!<br/>
Awaiting a rejected promise that throws, causes the async method to return a rejected promise.<br/>

The following is the general algorithm for using async methods:

    const bluebird = require("bluebird");<br/>

    const Promise = bluebird.Promise;<br/>

    // We use bluebird to make a copy of fs<br/>
    // that has all its normal methods, and<br/>
    // {methodName}Async method versions that return<br/>
    // promises as well; ie, you will have a copy<br/>
    // of fs with fs.stat(path, callback) and<br/>
    // fs.statAsync(path), which returns a promise<br/>
    // thus allowing us to await it.<br/>

    const fs = bluebird.promisifyAll(require("fs"));<br/>

    async function getFileSizeInKilobytes(path) {

    <br/>
      // Throwing inside of an async method causes the method<br/>
      // To return a rejected promise, which means we can throw based<br/>
      // On arguments<br/>
  
  
     if (!path) throw "You must provide a path";<br/>
  
     const stats = await fs.statAsync(path);<br/>

     return stats.size / 1024;<br/>
    }

    async function main() {<br/>

    // We can await this; if it throws / rejects<br/>
    
     const kilos = await getFileSizeInKilobytes("./hello.txt");<br/>
  
      console.log(`That file is ${kilos}kb large!`);<br/>
  
    }

    main();


# fileData.js

This module will export four methods:

# async getFileAsString(path)

This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will, when given a path, return a promise (implicitly, due to being defined as an async function) that resolves to a string with the contents of the files.

If no path is provided, it will return a rejected promise.

If there are any errors reading the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async getFileAsJSON(path)

This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will, when given a path, return a promise that resolves to a JavaScript object. You can use the JSON.parse function to convert a string to a JavaScript object (if it's valid!).

If no path is provided, it will return a rejected promise.

If there are any errors reading the file or parsing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async saveStringToFile(path, text)

This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will take the text supplied, and store it in the file specified by path. The function should return a promise that will resolve to true when saving is completed.

If no path or text is provided, it will return a rejected promise.

If there are any errors writing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# async saveJSONToFile(path, obj)

This method must be an async function, and will implicitly return a promise. You will await any promises inside this method to get the result of said promise (such as the result of a file operation) in order to use it in later on in the method. If the method enters a state that should return a rejected promise, you should achieve this by throwing, as thrown exceptions inside async methods cause the returned promise to be in a rejected state.

This method will take the obj supplied and convert it into a JSON string so that it may stored as in a file. The function should return a promise that will resolve to true when saving is completed.

If no path or obj is provided, it will return a rejected promise.

If there are any errors writing the file, the returned promise will reject rather than resolve, passing the error to the rejection callback.

# textMetrics.js

Firstly, this module will export a method, simplify(text). This method will take a string of text and will:

    Convert the text to lowercase
    Remove all non-alphanumeric and whitespace characters (?.!'," and so on)
    Convert all white space to simple spaces (new lines become spaces; tabs become spaces, spaces stay the same, etc)
    Convert all duplicate spaces to be single spaces; ie, hello phil with 5 spaces between each word becomes hello phil with one space between each word
    Trim the whitespace off the start and end of the text
    Return the result.
    
Secondly, this module will export a method, createMetrics(text) which will scan through the text, simplify the text, and return an object with the following information based on the simplified text:


    {
       totalLetters: total number of alphanumeric characters in the simplified text,
        totalWords: total number of words in the simplified text; numbers count as words,
       uniqueWords: total number of unique words that appear in the simplified text; numbers count as words,
        longWords: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words; numbers count as words,
        averageWordLength: the average number of letters in a word in the text; numbers count as words,
        wordOccurrences: a dictionary of each word and how many times each word occurs in the text; numbers count as words
     }

So running:

createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23")

Will return:

    totalLetters: 45 (helllomythisisagreatdaytosayhelllohelllo23423),
    totalWords: 15 (["helllo","my","this","is","a","great","day","to","say","helllo","helllo","2","3","4","23"] is 15 words),
    uniqueWords: 13 (helllo, my, this, is, a, great, day, to, say, 2, 3, 4, 23),
    longWords: 3,
    averageWordLength: 3,
    wordOccurrences: {
        helllo: 3,
        my: 1,
        this: 1,
        is: 1,
        a: 1,
        great: 1,
        day: 1,
        to: 1,
        say: 1,
        2: 1,
        3: 1, 
        4: 1,
        23: 1
    }
    }   

# app.js

Write a file, app.js, which will perform the following operation on each of these files :

    chapter1.txt
    chapter2.txt
    chapter3.txt

Write an async function that you will then call, that will do the following for each file:

    Check if a corresponding result file already exists for this file, if so query and print the result already stored.
    If no result file is found, get the contents of the file using getFileAsString
    Simplify the text, and store that text in a file named fileName.debug.txt
    Run the text metrics, and store those metrics in fileName.result.json
    Print the resulting metrics

So for example, with chapter1.txt, you will:

    Check if chapter1.result.json exists; if it does, query and print the resulting object
    If no result is found, perform getFileAsString(chapter1.txt)
    simplify the text and store the result in chapter1.debug.txt
    Run the text metrics and store those results in chapter1.result.json
    Print the resulting metrics
