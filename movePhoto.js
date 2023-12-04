const btn = document.querySelector('.btn');

const myAnimation = function () {
  const myPhoto = document.querySelector('.photo');
  let position = 0;

  const id = setInterval(movePhoto, 10);

  function movePhoto() {
    if (position === 300) {
      clearInterval(id);
      myPhoto.style.left = 0; 
    } else {
      position++;
      myPhoto.style.left = position + 'px';
    }
  }
};

btn.removeEventListener('click', myAnimation); // Remove the previous event listener if any
btn.addEventListener('click', myAnimation); // Add the updated event listener