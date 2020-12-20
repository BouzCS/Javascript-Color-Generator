const colorx = () => {
    //alert('If you wanna reload press the <<Color Pad.>> on TOP enjoy the app!');
    const clickOn = () => {
        const Btn = document.querySelector(".header h1");
        Btn.addEventListener('mousemove', () => {
        console.log("ez");
            document.querySelector(".header h1").classList.add("allo");
        })
    }
    //showing colors grids
    const showIn = () => {
        const playBtn = document.querySelector(".h2-container div");
        const colorContainer = document.querySelector(".color-container");
        const mainUp = document.querySelector(".mainUp");
        playBtn.addEventListener("click", () =>{
            console.log("work0");
            mainUp.classList.add("fadeOut");
            colorContainer.classList.add("fadeIn");

        });
    };
    // fade in the grids
    const clickedOn = () => {
        const Btn = document.querySelector("div.color-container");
        const gridx = document.querySelector(".grid-container");
        Btn.addEventListener('click', () =>{
            Btn.classList.remove('fadeIn');
            Btn.classList.add("fadeOut");
            gridx.classList.add("fadeIn");
        })
    }
     //funtion getting rgb values
    function getIt(elm) {
        var arr1 = elm.split('');
        arr1.splice(0,4);
        arr1.pop();
        var values = (arr1.join('')).split(',');
        return values;
    }
    //rgb function
    function rgbx(r, g, b){
        return "rgb("+r+","+g+","+b+")";
    }
    //rgb adding numbers
    function addNum(num,i){
        var n = parseInt(num);
        if ( n < 255)
        {
           return n = n + i*14;
        }
        else if ( n=>255 ) { 
        return n;
        }
    }
    //rgb adding num for grids
    function addNum2(num,i){
        var n = parseInt(num);
        if ( n < 255)
        {
           return n = n + i*5;
        }
        else if ( n=>255 ) { 
        return n;
        }
    }

    //Substract the number
    function subNum(num,i){
        var n = parseInt(num);
        if ( n > 0)
        {
           return n = n - i*5;
        }
        else if ( n==0 ) { 
        return n;
        }
    }
    //Average adding to the number
    function avgNum(num,num1,i){
        var n = parseInt(num);
        var r= parseInt(num1);
        if (r>128){
            if ( n > 0)
            {
            return n = n - i*2;
            }
            else if ( n==0 && n==255 ) { 
            return n;
            }
        }
        else{
            if ( n > 0)
            {
            return n = n + i*2;
            }
            else if ( n==0 && n==255 ) { 
            return n;
            }
        }
    }
    //Failure is a great teacher!
    /*/function avgNum2(num,i){
        var n = parseInt(num);
        if (n > 0 && n<128){

            return n = n - i*2;
            }
            else if ( n==0 && n==255) { 
            return n;
            }
        
        else{
            return n = n + i*2
        }
    }/*/
    
    //Changing grids colors after choosing color
    function randomOne() {
        const cBtn = document.querySelector("div.color-container");
        const apply = document.querySelectorAll(".a1");
        
        cBtn.addEventListener('click', (event) => {
            for (let i = 0; i < apply.length; ++i) {    
                    const idx = event.target.id;
                    const dd = document.getElementById(idx.toString());
                    const elem = window.getComputedStyle(dd, null).getPropertyValue("background-color"); 
                    var elm = getIt(elem);
                    var colorChanger = rgbx( addNum(elm[0],i), addNum(elm[1],i), addNum(elm[2],i));
                    console.log(colorChanger);
                    apply[i].style.backgroundColor = colorChanger;
            }
         });   
    }

    //Changing grids after 2nd choice
    function randomTwo(){
        const Btn = document.querySelector('.grid-container');
        const apply = document.querySelectorAll(".a1")
        
        Btn.addEventListener("click", (event) => {
            const idx = event.target.id;
            const elem = document.getElementById(idx.toString());
            const colorValue = window.getComputedStyle(elem, null).getPropertyValue("background-color");
            console.log(colorValue);
            
            var elm = getIt(colorValue);
            if ( (elm[0] > 129 || elm[0] < 256) && (elm[1] > 0 || elm[1] < 256) && (elm[2]==0)){
                for (let i = 0; i < apply.length ; ++i) {
                    var colorChanger = rgbx( addNum2(elm[0],i), subNum(elm[1],i), avgNum(elm[2],elm[0],i));
                    //
                    apply[i].style.backgroundColor = colorChanger;
                }
                }
            else if ((elm[0] > 129 || elm[0] < 256) && (elm[1] ==0) && (elm[2]> 0 || elm[1] < 256)){
                for (let i = 0; i < apply.length ; ++i) {
                    var colorChanger = rgbx( subNum(elm[0],i), avgNum(elm[1],elm[0],i), addNum2(elm[2],i));
                    //
                    apply[i].style.backgroundColor = colorChanger;
                }
            }
            else if ((elm[0] > 0 || elm[0] < 129) && (elm[1] >0 || elm[1] < 256) && (elm[2]==255)){
                for (let i = 0; i < apply.length ; ++i) {
                    var colorChanger = rgbx( subNum(elm[0],i), addNum2(elm[1],i), avgNum(elm[2],elm[0],i));
                    //
                    apply[i].style.backgroundColor = colorChanger;
                }
            }
            else if ((elm[0] > 0 || elm[0] < 129) && (elm[1] ==255) && (elm[2]> 0 || elm[2] < 256)){
                for (let i = 0; i < apply.length ; ++i) {
                    var colorChanger = rgbx( addNum2(elm[0],i), avgNum(elm[1],elm[0],i), subNum(elm[2],i));
                    //
                    apply[i].style.backgroundColor = colorChanger;
                }
            }
            else {
                for (let i = 0; i < apply.length ; ++i) {
                    var colorChanger = rgbx( avgNum(elm[0],elm[0],i), avgNum(elm[1],elm[0],i), addNum2(elm[2],i));
                    //
                    apply[i].style.backgroundColor = colorChanger;
            }
        }
        })
    }
randomTwo();
randomOne();
clickOn();
showIn();
clickedOn();
};
colorx();
