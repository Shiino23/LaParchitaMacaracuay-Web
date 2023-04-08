const body = document.querySelector('body')


const rainingLeafs = () =>{
    
    let leaf = document.createElement('i');
    let leaf2 = document.createElement('j')
    let x = innerWidth * Math.random();
    let height = (Math.random() * 12) + 60;
    let width = (Math.random() * 14) + 60;
    let z = Math.round(Math.random)* 0.1;
    let delay = Math.random() * 5;
    let anima = (Math.random() * 10) + 5;
    let deg = Math.round(Math.random)*2;

    
    leaf.style.rotate = deg+'deg';
    leaf.style.left = x + 'px';
    leaf.style.width = width + 'px';
    leaf.style.height = height + 'px';
    leaf.style.zIndex = z;
    leaf.style.animationDelay = delay + 's';
    leaf.style.animationDuration = anima + 's';



    body.appendChild(leaf)

    setTimeout(() => {
        leaf.remove()

    }, anima * 1000);

};

setInterval(rainingLeafs, 1000);