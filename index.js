const openBtn = document.getElementById("toggle");
const dom = document.getElementById("menu");
const closeBtn = document.getElementById("closeNav");

let toggle = 0;

const tog = async()=>{

    if(toggle){
        toggle = 0;
        dom.classList.add("hide");
        return;
    }

    toggle = 1;
    dom.classList.remove("hide");
    return;    

};

openBtn.addEventListener("click", tog);
closeBtn.addEventListener("click", tog);

const checkDarkMode = ()=>{

    if (!window.matchMedia) {

        return 0;

    }

    if(window.matchMedia('(prefers-color-scheme : dark)').matches){

        return 1;

    }

    return 0;

};


const root = document.getElementsByClassName("content")[0];


root.onscroll = ()=>{

    const scrollTop = getOffset(root).top*-1;


    if(scrollTop < 150) {

        document.body.style.setProperty("--background", "var(--colorB)");
        root.style.setProperty("--background", "var(--colorB)");

        return;
    };

    if(!checkDarkMode()){
        //LIGHT
        root.style.setProperty("--background", "hsl(0, 0%, 100%)");
        document.body.style.setProperty("--background", "hsl(0, 0%, 100%)");
        root.style.setProperty("--color", "hsl(0, 0%, 0%)");
        document.body.style.setProperty("--color", "hsl(0, 0%, 0%)");

        return;

    };
    
    document.body.style.setProperty("--background", "hsl(211, 28%, 17%)");
    root.style.setProperty("--background", "hsl(211, 28%, 17%)");
    root.style.setProperty("--color", "hsl(0, 0%, 100%)");
    document.body.style.setProperty("--color", "hsl(0, 0%, 100%)");
    return;

};

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
    }
    return { top: _y, left: _x };
    }
