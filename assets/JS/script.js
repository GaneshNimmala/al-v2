// document.addEventListener("DOMContentLoaded", function () {
//   setInterval(function () {
//     document.querySelectorAll(".column").forEach(function (column) {
//       const firstImage = column.querySelector(".image-container:first-child");
//       const secondImage = column.querySelector(".image-container:nth-child(2)");
//       const lastImage = column.querySelector(".image-container:last-child");

//       firstImage.classList.remove("active");
//       secondImage.classList.add("active");

//       setTimeout(function () {
//         firstImage.remove();
//         column.appendChild(firstImage);
//         firstImage.classList.add("active");
//       }, 1000);
//     });
//   }, 2000);
// });

$(document).ready(function () {
  $("#column1, #column2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    verticalSwiping: true,
  });
});
