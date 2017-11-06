module.exports = {
    description: "This is a Lab2 Assignment for CS-546",
    triangle: (lines) => {
        checkTriangle(lines);

        for(let i=1;i<=lines;i++)
        {
            let s ='';
            for(let j=1;j<=(lines-i);j++)
            {
                s = ' '+s;
            }
    
            s=s+'/';
    
            for(let k=lines-1;k>lines-i;k--)
            {
                if(i===lines)
                {
                    s=s+'--';
                }
                else
                {
                s=s+'  ';
                }
            }
    
            s=s+'\\';
    
            console.log(s);
        }

    },
    square: (lines) => {
        checkSquare(lines);

        for(let i=0;i<lines;i++)
        {
            let s='|';
            for(let j=0;j<lines;j++)
            {
                if(i===0 || i===(lines-1))
                {
                    s=s+'-';
                }
                else
                {
                    s=s+' ';
                }
            }
            s=s+'|';
            console.log(s);
        
        }

    },
    rhombus: (lines) =>{
        checkRhombus(lines);

        for(let i=1;i<=lines/2;i++)
        {
            let s='';
            for(let j=1;j<=(lines/2-i);j++)
            {
                s = ' '+s;
            }
            if(i===1)
            {
                s=s+'/-';
            }
            else
            {
                s=s+'/ ';
            }
            
            for(let k=lines/2-1;k>lines/2-i;k--)
            {
                s=s+'  ';
            }
            s=s+'\\';
    
            console.log(s);
        }
        for(let i=1;i<=lines/2;i++)
        {
            let s='';
            for(let j=lines-1;j>lines-i;j--)
            {
                s = ' '+s;
            }
            if(i==(lines/2))
            {
                s=s+'\\-';
            }
            else
            {
                s=s+'\\ ';
            }
            
            for(let k=1;k<=(lines/2-i);k++)
            {
                s=s+'  ';
                
            }
            s=s+'/';
    
            console.log(s);
    
        }

    }
};

function checkTriangle(val) {
    if (val === undefined || typeof val !== "number" || 
    !Number.isInteger(val) || val < 1) {
        throw 'Provided variable is not a valid number';
    }
}

function checkSquare(val) {
    if (val === undefined || typeof val !== "number" || 
    !Number.isInteger(val) || val < 2) {
        throw 'Provided variable is not a valid number';
    }
}

function checkRhombus(val) {
    if (val === undefined || typeof val !== "number" || 
    !Number.isInteger(val) || val < 2 || val%2!== 0) {
        throw 'Provided variable is not a valid number';
    }
}