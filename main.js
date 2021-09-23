const kube = document.querySelector('.kube'),
     empty = Array.from(document.querySelectorAll('.empty'));

     let itemAppend;

//kube.addEventListener('touchstart', processTouchstart);
kube.addEventListener('touchmove', processTouchmove);
//kube.addEventListener('touchcancel', processTouchcancel);
kube.addEventListener('touchend', processTouchend);

function processTouchmove (event){
    event.preventDefault();
    let touch = event.targetTouches[0];
    console.log(touch.pageX);
    console.log(touch.pageY);
    kube.style.left = `${touch.pageX - 200}px`;
    kube.style.top = `${touch.pageY - 50}px`;
    empty.map(item => {
        if (
            kube.getBoundingClientRect().top + kube.offsetWidth / 2 < item.getBoundingClientRect().bottom &&
            kube.getBoundingClientRect().right - kube.offsetWidth / 2 > item.getBoundingClientRect().left &&
            kube.getBoundingClientRect().bottom - kube.offsetWidth / 2 > item.getBoundingClientRect().top &&
            kube.getBoundingClientRect().left + kube.offsetWidth / 2 < item.getBoundingClientRect().right
        ) {
            item.classList.add('active');
            itemAppend = item;
        }
        else {
            item.classList.remove('active');
        }
    });

}

function processTouchend(element) {
    if (itemAppend.classList.contains('active')) {
        itemAppend.append(this);
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
    else {
        this.style.top = `${itemAppend.offsetTop}px`;
        this.style.left = `${itemAppend.offsetLeft}px`;
    }
}

