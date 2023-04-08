const body = document.querySelector('body')

const rainingLeafs = () =>{
    let leaf = document.createElement('i');
    let x = innerWidth * Math.random();
    let height = (Math.random() * 8) + 40;
    let width = (Math.random() * 10) + 40;
    let z = Math.round(Math.random)* 100;
    let delay = Math.random() * 5;
    let anima = (Math.random() * 10) + 20;
    
    leaf.style.left = x + 'px';
    leaf.style.width = width + 'px';
    leaf.style.height = height + 'px';
    leaf.style.zIndex = z;
    leaf.style.animationDelay = delay + 's';
    leaf.style.animationDuration = anima + 's';


    body.appendChild(leaf)

    /* setTimeout(() => {
        leaf.remove()

    }, anima * 1000); */

};

setInterval(rainingLeafs, 100);

