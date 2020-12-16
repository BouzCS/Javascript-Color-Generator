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
clickOn();
showIn();
};
colorx();
