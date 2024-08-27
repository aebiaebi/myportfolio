const image =  [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelectorAll('.popup');
const closeBtn = document.querySelectorAll('close-btn');
const imageName = document.querySelectorAll('.image-name');
const largeImage = document.querySelectorAll('.large-image');
const ImageIndex = document.querySelectorAll('.index');
const leftArrow = document.querySelectorAll('left-arrow');
const rightArrow = document.querySelectorAll('.right-arrow');

let index = 0; // will track our current image;

image.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/image${i+1}.jpg`;
    largeImage.scr = path;
    imageName.InnerHTML = path;
    ImageIndex.InnerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('clicl', () => {
    popup.classList.toggle('active');
})