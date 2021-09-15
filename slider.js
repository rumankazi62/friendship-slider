const image = [
  'images/ruman&joy-1.jpg',
  'images/ruman&joy-2.jpg',
  'images/ruman&joy-3.jpg',
  'images/ruman&joy-4.jpg',
  'images/ruman&joy-5.jpg',
  'images/ruman&joy-6.jpg',
  'images/ruman&joy-7.jpg'
];
let imageIndex = [0];
const imageElement = document.getElementById('slider-img');
setInterval(() => {
  if(imageIndex >= image.length){
    imageIndex = 0;
  }
  const imageUrl = image[imageIndex];
  imageElement.setAttribute('src', imageUrl);
  imageIndex++;
}, 1000)