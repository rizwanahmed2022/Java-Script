let a = document.getElementsByClassName("cantainer")[0];
let b = document.getElementById("bt");

// function timeout() {
//     setTimeout(() => {
//         console.log("this is log");
//     }, 2000);
// }



let y = () => {
  alert("this is working");
};
let z = () => {
  alert("On mOuse Enter ");
};

b.addEventListener("click", y);
b.addEventListener("mouseenter", z);
