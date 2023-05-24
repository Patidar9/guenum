
var height= 6;
var width= 9;
var but = 0 ;
var aee = 0;
var row=0;
var col=0;
var countofGame = 0
var gameOver=false;
var realdata = 0

// var word="SQUID";


// guessList = guessList.concat(wordList);

// var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();

var word=Math.floor(100000000 + Math.random() * 900000000).toString();


// var rannum=Math.floor(Math.random()*100000);
// while(rannum<100000||rannum>99999)
// {
    
// var rannum=Math.floor(Math.random()*100000);
// console.log(rannum);
// }
// rannum=rannum.toString();
// var word=rannum;


const TILE_COLORS = {
    grey: '#cccccc',
    green: '#00ff00',
    orange: '#ffa500',
    black: '#000000'
  };


window.onload=function(){
    initialize();
    let newcount = sessionStorage.getItem('count')
    realdata = newcount
    let di = sessionStorage.getItem('count')
    document.getElementById('playgame').innerHTML= di

}


function initialize(){

    
    for(let r=0;r<height;r++)
    {
        let newdiv=document.createElement("div");
        newdiv.className="newd";
        for(let c=0;c<width;c++)
        {
            let tile=document.createElement("div");
            tile.id=r.toString()+'-'+c.toString();
            tile.classList.add("tile");
            
            tile.innerText="";
            newdiv.appendChild(tile);
            
        }
        document.getElementById("board").appendChild(newdiv);
    
    }

    // let keyboard=[
    //     ["Q","W","E","R","T","Y","U","I","O","P"],
    //     ["A","S","D","F","G","H","J","K","L"],
    //     ["Enter","Z","X","C","V","B","N","M","⌫"]]

    let keyboard=[["0","1","2"],
["3","4","5"],
["6","7","8"],["Enter","9","⌫"]]

let key=document.getElementById("keyboard");

for(let i=0;i<keyboard.length;i++)
{
   
    let currRow=keyboard[i];
    let keyboardRow=document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for(let j=0;j<currRow.length;j++)
    {
        let keyTile=document.createElement("div");
        let key=currRow[j];
        keyTile.innerText=key;
        
        if(key=="Enter")
        {
                keyTile.id="Enter";
        }
        else if(key=="⌫")
        {
            keyTile.id="Backspace";
        }
        else if(key>="0"&&key<="9")    // change to key>="A"&&key<="Z"  
        {
            keyTile.id="Key"+key;
     
        }

        keyTile.addEventListener("click",processKey);
        if(key=="Enter")
        {
            keyTile.classList.add("enter-key-tile");
        }
        else{
            keyTile.classList.add("key-tile");
        }
        keyboardRow.appendChild(keyTile);
    }
    document.body.appendChild(keyboardRow);
}



document.addEventListener("keyup",(e)=>{
        processInput(e);
})




    let styles = document.createElement('style');
    styles.innerHTML = '.key-tile { background-color: ' + TILE_COLORS.grey + '; }' +
      '.key-tile.green { background-color: ' + TILE_COLORS.green + '; }' +
      '.key-tile.orange { background-color: ' + TILE_COLORS.orange + '; }' +
      '.key-tile.black { background-color: ' + TILE_COLORS.black + '; }';
    document.head.appendChild(styles);

}

function processKey()
{
    let e={"code":this.id};
        processInput(e);
}

function processInput(e){
    
  

   




    // if (! e.code=="Enter") {
        if ( e.code == "Key1" ||e.code == "Key2" || e.code =="Key3" || e.code =="Key4" || e.code =="Key5" || e.code =="Key6" || e.code =="Key7" || e.code =="Key8" || e.code =="Key9" || e.code =="Key0" ) {

            if (but < 9)  {
                but ++
              
            }
            let f = e.code
            JSON.stringify(f)
            // console.log(f);
            let r= f.split('')
            let ui = r.at(-1)
            // console.log(r.at(-1));


            JSON.stringify(word) ;
            let newword = word.split('') ;
           
            let chackval = false ;
                 console.log(word);
                
            if(but == 1){
               let ans =  ui > newword[0]
           
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui == newword[0]) {
                chackval = true
              
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            } 
            if(but==2){
               let ans =  ui>newword[1]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[1]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==3){
               let ans =  ui>newword[2]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[2]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==4){
               let ans =  ui>newword[3]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[3]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==5){
               let ans =  ui>newword[4]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[4]) {
                chackval = true
             
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==6){
               let ans =  ui>newword[5]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[5]) {
                chackval = true
              
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==7){
               let ans =  ui>newword[6]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[6]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==8){
               let ans =  ui>newword[7]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[7]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
            if(but==9){
               let ans =  ui>newword[8]
             
              if(ans){
                chackval = true
                toastr.info('current value is greater than of right value');
              }
            
              if (ui==newword[8]) {
                chackval = true
               
                toastr.success('right answer')
              }
       
              if (ans == false ) {
                if (chackval== false) {
                    
                    toastr.warning('current value is less than of right value')
                }
          }
            }
       
        }
    // }
   
  
    if(gameOver){ 
        document.getElementById("answer").innerText="You Have guessed right!";
        return;
    }
  
    let str=e.code;

    if (e.code == 'Digit1' || e.code == 'Digit2'||e.code == 'Digit3' ||e.code == 'Digit4' ||e.code == 'Digit5' ||e.code == 'Digit6' ||e.code == 'Digit7' || e.code == 'Digit8' ||e.code == 'Digit9' ||e.code == 'Digit0'    ) {
      str=str.replace("Numpad","Key");
      str=str.replace("Digit","Key");
      let currTile=document.getElementById(row.toString()+'-'+col.toString());

      if ( currTile && currTile.id) {
        if (aee <= 9) aee ++
     }
   
   
     JSON.stringify(word) ;
     let newword = word.split('') ;
     let ui = e.key;
     let chackval = false ;
          console.log(word);
     if(aee==1){
        let ans =  ui>newword[0]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[0]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     } 
     if(aee==2){
        let ans =  ui>newword[1]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[1]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==3){
        let ans =  ui>newword[2]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[2]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==4){
        let ans =  ui>newword[3]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[3]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==5){
        let ans =  ui>newword[4]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[4]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==6){
        let ans =  ui>newword[5]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[5]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==7){
        let ans =  ui>newword[6]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[6]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==8){
        let ans =  ui>newword[7]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[7]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }
     if(aee==9){
        let ans =  ui>newword[8]
      
       if(ans){
         chackval = true
         toastr.info('current value is greater than of right value');
       }
     
       if (ui==newword[8]) {
         chackval = true
         console.log(chackval)
         toastr.success('right answer')
       }

       if (ans == false ) {
         if (chackval== false) {
             
             toastr.warning('current value is less than of right value')
         }
   }
     }

            
    
}  
  
      
       
       
   
    // e.code=console.log(e.code.replace("Digit","Key"));
   
    

    if (str >= "Key0" && str <= "Key9") {
        if (col < width) {
          let currTile = document.getElementById(row.toString() + '-' + col.toString());
          if (currTile.innerText == "") {
            currTile.innerText = str[3];
            currTile.classList.remove('grey');
    
            // check if the digit is present and in the right place
            if (word.includes(currTile.innerText) && word.indexOf(currTile.innerText) == col) {
              currTile.classList.add('green');
            }
            // check if the digit is present but not in the right place
            else if (word.includes(currTile.innerText)) {
              currTile.classList.add('orange');
            }
            // check if the digit is not present
            else {
              currTile.classList.add('black');
            }
    
            col += 1;
          }
        }
    }
    else if(str=="Backspace")
    {
        if(col>0&&col<=width)
        {
            
            col-=1;
        }
        let currTile=document.getElementById(row.toString()+'-'+col.toString());
        currTile.innerText="";
    }

    else if(str=="Enter" )
    {
      
       
        
        if (aee == 9 ) {
            update();
            aee = 0
        }
        if ( e.code == 'Enter') {
            if (but == 9) {
               update();
                but = 0
            }
        }

      
        
    }
    if(!gameOver&&row==height)
    {
        gameOver=true;
        document.getElementById("answer").innerText="Correct Word is "+word;
      countofGame ++
      sessionStorage.setItem("count", countofGame)
     console.log(realdata);
     realdata++
    
     sessionStorage.setItem('count',realdata)

      
    }
}


// you will have to apply check for column 0

function update(){

    let guess="";
    document.getElementById("answer").innerText="";
    
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
        
       
        
        
        
    }
    // guess=guess.toLowerCase();

    // if(!guessList.includes(guess))
    // {
    //     document.getElementById("answer").innerText="Not In Word List";
    //     return;
    // }


    let correct=0;
    let letterCount={};

    for(let i=0;i<word.length;i++)
    {
        let letter=word[i];
        if (letterCount[letter]) {
            letterCount[letter] += 1;
         } 
         else {
            letterCount[letter] = 1;
         }
        
    }




    for(let c=0;c<width;c++){
    let currTile=document.getElementById(row.toString()+'-'+c.toString());
    let letter=currTile.innerText;
    if(word[c]==letter)
    {
        currTile.classList.add("correct");
        // let keyTile=document.getElementById("Key"+letter);
        // if(keyTile.classList.contains("present")){
        // keyTile.classList.remove("present");
        // keyTile.classList.add("correct");
        // }
        // else{
        //     keyTile.classList.add("correct");
        // }




        correct+=1;
        letterCount[letter]-=1;
    }
    

    if(correct==width)
    {
        gameOver=true;
        document.getElementById("answer").innerText="You Have guessed right!";
      
    }

    }

    for(let c=0;c<width;c++){
        let currTile=document.getElementById(row.toString()+'-'+c.toString());
        let letter=currTile.innerText;
        
        if(!currTile.classList.contains("correct"))
        // if(word.includes(letter)&&letterCount[letter]>0)
        if(letterCount[letter]>0)
        {
            currTile.classList.add("present");

            // let keyTile=document.getElementById("Key"+letter);

            // if(!keyTile.classList.contains("correct"))
            // {
            //     keyTile.classList.add("present");
            // }
        

            letterCount[letter]-=1;
        }
        else{
            currTile.classList.add("absent");
            // let keyTile=document.getElementById("Key"+letter);
            
            // keyTile.classList.add("absent");
        }
    
        }
        row+=1;
            col=0;

}
