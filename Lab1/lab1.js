//FUNCTION 1
console.log('');
console.log('Function 1: OUTPUT:');
console.log('');

function sumOfSquares(num1, num2, num3){
    
    if(typeof(num1)==='number' && typeof(num2)==='number' && typeof(num3)==='number'){
    
    return (num1*num1)+(num2*num2)+(num3*num3);
    }
    else{
        throw 'Exception: Arguments are not a number';
    }
}


try{
    console.log(sumOfSquares(5, 3, 10));
}catch(e){
    console.log(e);
}
try{
    console.log(sumOfSquares(0, 4, 8));
}catch(e){
    console.log(e);
}
try{
    console.log(sumOfSquares(-5, -10, 2));
}catch(e){
    console.log(e);
}
try{
    console.log(sumOfSquares('1', 2, 3));
}catch(e){
    console.log(e);
}
try{
    console.log(sumOfSquares(1.2, 3.3, 1));
}catch(e){
    console.log(e);
}


//FUNCTION 2
console.log('');
console.log('Function 2: OUTPUT:');
console.log('');

function sayHelloTo(firstName, lastName, title){
    
    if((firstName === undefined) && (lastName === undefined) && (title === undefined)){
        
        throw 'Exception: FirstName,lastName and title are not defined';
    }
    else if ((lastName === undefined)&&(title === undefined)){
        
        if(typeof firstName === 'string'){
        
            console.log("Hello, "+firstName+"!");
        }
        else{
            throw 'Exception: Invalid Firstname Type';
        }
    }
    else if ((title === undefined)){
        
        if(typeof firstName === 'string' && typeof lastName === 'string'){
        
            console.log("Hello, "+firstName+" "+lastName+". I hope you are having a good day!");
        }
        else{
            throw 'Exception: Invalid Firstname or Lastname Type';
        }
        
    }
    else{
        if(typeof firstName === 'string' && typeof lastName === 'string' && typeof title ==='string'){
        
            console.log("Hello, "+title+" "+firstName+" "+lastName+"! Have a good evening!");
        }
        else{
            throw 'Exception: Invalid Firstname or Lastname or Title Type';
        }
        
    }
}

try{
    sayHelloTo(); 
}catch(e){
    console.log(e);
}

try{
    sayHelloTo("Phil"); 
    sayHelloTo("Phil", "Barresi"); 
    sayHelloTo("Phil", "Barresi", "Mr."); 
}catch(e){
    console.log(e);
}


//FUNCTION 3
console.log('');
console.log('Function 3: OUTPUT:');
console.log('');

function cupsOfCoffee(howManyCups){
    
    if(typeof howManyCups!== 'number' || howManyCups < 1 || !Number.isInteger(howManyCups))
        {
            throw 'Exception: Invalid argument type: should be a Positive Integer ';
        }
    else{
        
    let song = '';
    
    for(let i=howManyCups;i>=1;i--)
        {
            if(i === 1){
                
                song += ''+i+' cup of coffee on the desk! '+ i +' cup of coffee! \n';
                song += 'Pick it up, drink the cup, no more coffee left on the desk!';
                
            }
            else if(i === 2){
                
                song += ''+i+' cups of coffee on the desk! '+ i +' cups of coffee! \n';
                song += 'Pick one up, drink the cup, '+ (i-1) +' cup of coffee on the desk! \n\n';
            }
            else{
                
                song += ''+i+' cups of coffee on the desk! '+ i +' cups of coffee! \n';
                song += 'Pick one up, drink the cup, '+ (i-1) +' cups of coffee on the desk! \n\n';
            }
        }
    return song;
    }
}

let coffeeSong ='';
try{
      coffeeSong = cupsOfCoffee(2);
        console.log(coffeeSong);
}catch(e){
    console.log(e);
}




//FUNCTION 4
console.log('');
console.log('Function 4: OUTPUT:');
console.log('');

function occurrencesOfSubstring(fullString, substring){
    
    if(typeof fullString === 'string' && typeof substring === 'string' && fullString.length >= substring.length){
        
        let c = 0;
        let n = substring.length;
    
        for(let i=0;i<(fullString.length - n);i++){
        
            if(fullString.substring(i,i+n) === substring){
                c++;
            }
        }
        return c;
    }
    else{
        throw 'Exception: Invalid Argument';
    }
}

let n1 = '';
let n2 = '';
let n3 = '';
try{
     n1 = occurrencesOfSubstring("hello world", "o");
     console.log(n1);
}catch(e){
    console.log(e);
}
try{
     n2 = occurrencesOfSubstring("Helllllllo, class!", "ll");
     console.log(n2);
}catch(e){
    console.log(e);
}
try{
     n3 = occurrencesOfSubstring("Web Developement", "e");
     console.log(n3);
}catch(e){
    console.log(e);
}




//FUNCTION 5
console.log('');
console.log('Function 5: OUTPUT:');
console.log('');

function randomizeSentences(paragraph){
    
    if(typeof paragraph !== 'string'){
        throw 'Exception: Argument should be a string';
    }
    else{
    var separators = ['\\\. ', '\\\! '];
    let random = paragraph.split(new RegExp(separators.join('|'), 'g'));
    random[0] = random[0]+'! ';
    random[1] = random[1]+'. ';
    random[2] = random[2]+'. ';
    random[3] = random[3]+' ';
    
    
    for(let i=0;i<random.length;i++){
        let randomNum = Math.floor(Math.random() * (random.length));
        let temp = random[i];
        random[i] = random[randomNum];
        random[randomNum] = temp;
    }
                        
    return random.join('');
    }
        
}

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

let randomizeParagraph ='';
try{
    randomizeParagraph = randomizeSentences(paragraph);
    console.log(randomizeParagraph);
}
catch(e)
    {
        console.log(e);
    }
