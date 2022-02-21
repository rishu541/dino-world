const btnLoad = document.querySelector('#btnLoad');
const box = document.querySelector('#box');
const imgBox = document.querySelector('#imgBox');
btnLoad.addEventListener('click', () => {
  getDinoName();
  getDinoImg();
});

async function getDinoName() {
  const repsonse = await fetch('/dinoname');
  const data = await repsonse.json();
  const dinoName = data[0].join(' ');
  const h1 = document.createElement('h1');
  box.textContent = `${dinoName.split(' ')[0]}`;
}

async function getDinoImg() {
  const repsonse = await fetch('/dinoimage');
  const data = await repsonse.json();
  const dinoImg = data.value[Math.floor(Math.random() * data.value.length)];
  imgBox.src = dinoImg.thumbnailUrl;
  imgBox.alt = dinoImg.name;
  console.log(dinoImg);
}
