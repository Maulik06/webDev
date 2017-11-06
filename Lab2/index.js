const printShape = require("./printShape");

for(let i=1;i<=10;i++)
{
    try{
    console.log('\nTriangle Size: '+i+'\n');
    printShape.triangle(i);
    }
    catch(e){
        console.log(e);
    }
}

for(let i=2;i<=11;i++)
{
    try{
    console.log('\nSquare Size: '+i+'\n');
    printShape.square(i);
    }
    catch(e){
        console.log(e);
    }
}

for(let i=2;i<=20;i=i+2)
{
    try{
    console.log('\nRhombus Size: '+i+'\n');
    printShape.rhombus(i);
    }
    catch(e){
        console.log(e);
    }
}