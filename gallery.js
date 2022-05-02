const images = document.querySelectorAll('img');
const modalBg = document.querySelector('.modalBg')
const guyimg = document.querySelector('.guyimg')
const container = document.querySelector('.container')
const moda = document.querySelector('.modal')
const bgActive = document.querySelector('.bgActive')






for (let eachImg of images) {
    eachImg.addEventListener('click', function () {
        const you = eachImg.src
        guyimg.src = you
        modalBg.classList.add('bgActive');
    })
}

modalBg.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) {
        return;
        console.log("yo");
    }
    modalBg.classList.remove('bgActive');
});



    // button.addEventListener('click', () => {
    //     modal.style.display = "none";
    // });


