const colorx = () => {
    alert('If you wanna reload press the <<Color Pad.>> on TOP enjoy the app!');
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
    //Changing grids colors after choosing color
    function randomOne() {
        const cBtn = document.querySelector("div.color-container");
        const apply = document.querySelectorAll(".a1");
        
        cBtn.addEventListener('click', (event) => {
            for (let i = 0; i < apply.length; i++) {    
                    var idx = event.target.id;
                    var dd = document.getElementById(idx.toString());
                    var elem = window.getComputedStyle(dd, null).getPropertyValue("background-color"); 
                    console.log(elem);  
                    apply[i].style.backgroundColor = elem;
                
            }
        
         });   
    }
randomOne();
clickOn();
showIn();
clickedOn();
};
colorx();
