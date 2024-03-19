// margin for container width full width
let containerWithNoEnd = document.querySelectorAll('.container-no-end');
let sourceContainer = document.querySelector('.container');

// console.log(sourceContainer);

const makeMargin = () => {
  const offsetLeftOfContainer = sourceContainer.offsetLeft - 80;

  containerWithNoEnd.forEach((item) => {
    item.style.marginLeft = offsetLeftOfContainer + "px";
  });
};

makeMargin();

window.onresize = makeMargin;
//# sourceMappingURL=padding-left-script.js.map