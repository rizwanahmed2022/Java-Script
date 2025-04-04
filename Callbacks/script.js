function success(error, src) {
  if (error) {
    console.log("Error");
    console.log(src);
  } else {
    console.log("Script Loaded");
    console.log(src);
  }
}


function func(src, load) {
  let scrt = document.createElement("script");
  scrt.src = src;
  scrt.onload = function () {
    load(false,src)
  };
  scrt.onerror = function () {
    load(true,src)
  };
  document.head.appendChild(scrt);
}

func(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  success
);
