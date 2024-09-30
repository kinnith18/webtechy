const cursor = document.querySelector('.cursor');

// Function to move the cursor
document.addEventListener('mousemove', (e) => {
  const cursorWidth = cursor.offsetWidth / 2;
  const cursorHeight = cursor.offsetHeight / 2;
  
  cursor.style.left = (e.pageX - cursorWidth) + 'px';
  cursor.style.top = (e.pageY - cursorHeight) + 'px';
});

// Function to add scale effect on hover
const elementsToHover = document.querySelectorAll('p, h1, h2, h3, img, ul li, button, a');

elementsToHover.forEach(element => {
  // Enlarge cursor when hovering over any of the elements
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(6)';
  });

  // Shrink the cursor back when leaving the element
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});

