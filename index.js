document.addEventListener("keypress",function(event){
    sound(event.key);
   
});

// for(var i=0;      i <document.querySelectorAll(".drum").length    ;i++){
//     document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
//         sound(this.innerHTML);
//     })
// }



function sound(key){
    switch (key) {
        case "T":
            var au0 = new Audio("sounds/crash.mp3");
            au0.play();
            break;
        
        case "F":
            var au1 = new Audio("sounds/tom-1.mp3");
            au1.play();
            break;
    
        case "G":
            var au2 = new Audio("sounds/tom-2.mp3");
            au2.play();
            break;
    
        case "H":
            var au3 = new Audio("sounds/tom-3.mp3");
            au3.play();
            break;
        
        case "J":
            var au4 = new Audio("sounds/tom-4.mp3");
            au4.play();
            break;
    
        case "V":
            var au5 = new Audio("sounds/kick.mp3");
            au5.play();
            break;
            
        case "B":
            var au6 = new Audio("sounds/snare.mp3");
            au6.play();
            break;
        case "t":
            var au0 = new Audio("sounds/crash.mp3");
            au0.play();
            break;
            
        case "f":
            var au1 = new Audio("sounds/tom-1.mp3");
            au1.play();
            break;
        
        case "g":
             var au2 = new Audio("sounds/tom-2.mp3");
             au2.play();
            break;
        
        case "h":
            var au3 = new Audio("sounds/tom-3.mp3");
            au3.play();
        break;
            
        case "j":
            var au4 = new Audio("sounds/tom-4.mp3");
            au4.play();
            break;
        
        case "v":
            var au5 = new Audio("sounds/kick.mp3");
            au5.play();
            break;
                
        case "b":
            var au6 = new Audio("sounds/snare.mp3");
            au6.play();
            break;
        case "r":
            var au7 = new Audio("sounds/cowbell.mp3");
            au7.play();
            break;
        case "R":
            var au7 = new Audio("sounds/cowbell.mp3");
            au7.play();
            break;
        case "u":
            var au8 = new Audio("sounds/sand.mp3");
            au8.play();
            
            break;
        case "U":
            var au8 = new Audio("sounds/sand.mp3");
            au8.play();
            break;
        case "i":
            var au8 = new Audio("sounds/bongo.mp3");
            au8.play();
            break;
        case "I":
            var au8 = new Audio("sounds/bongo.mp3");
            au8.play();
            break;             
        case "O":
            var au9 = new Audio("sounds/bells.mp3");
            au9.play();
            break;
        case "o":
            var au9 = new Audio("sounds/bells.mp3");
            au9.play();
            break;      
        case "P":
            var au10 = new Audio("sounds/hr.mp3");
            au10.play();
            break;
        case "p":
            var au10 = new Audio("sounds/hr.mp3");
            au10.play();
            break;      
        
        
        default:
            break;
    }
    document.querySelector("."+ key);

    setTimeout(function(){
        document.querySelector("."+ key);    
    }, 150);

    
}