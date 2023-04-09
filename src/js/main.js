const body = document.querySelector('body')


const rainingLeafs = () =>{
    
    let leaf = document.createElement('i');
    let leaf2 = document.createElement('j')
    let x = innerWidth * Math.random();
    let size = (Math.random() * 12) + 90;
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

setInterval(rainingLeafs, 500);