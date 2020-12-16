const colorx = () => {
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
    const clickedOn = () => {
        const Btn = document.querySelector("div.color-container");
        const gridx = document.querySelector(".grid-container");
        Btn.addEventListener('click', () =>{
            Btn.classList.remove('fadeIn');
            Btn.classList.add("fadeOut");
            gridx.classList.add("fadeIn");
        })
    }
clickOn();
showIn();
clickedOn();
};
colorx();
