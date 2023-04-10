const body = document.querySelector('body')

const mql = window.matchMedia("(min-width: 920px)");


const rainingLeafs = () =>{
    
    let leaf = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 10) + 90;
    let z = Math.round(Math.random)* 0.1;
    let delay = Math.random() * 2;
    let anima = (Math.random() * 10) + 5;
    let deg = Math.round(Math.random)*2;

    
    leaf.style.rotate = deg+'deg';
    leaf.style.left = x + 'px';
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';
    leaf.style.zIndex = z;
    leaf.style.animationDelay = delay + 's';
    leaf.style.animationDuration = anima + 's';



    body.appendChild(leaf)

    setTimeout(() => {
        leaf.remove()

    }, anima * 1000);

};


addEventListener('resize', function(){ 
    console.log(window.innerWidth);
    if(this.window.innerWidth >= 920){
        setInterval(rainingLeafs, 1000);
    };
});

addEventListener('DOMContentLoaded', function(){ 
    console.log(window.innerWidth);
    if(this.window.innerWidth >= 920){
        setInterval(rainingLeafs, 1000);
    };
});
 





 