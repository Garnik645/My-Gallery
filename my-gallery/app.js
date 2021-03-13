let setGridHeight = () => {
   let grid = document.querySelector(".gallery");
   grid.style.height = getComputedStyle(grid).width;
};

setGridHeight();

window.addEventListener('resize', setGridHeight);