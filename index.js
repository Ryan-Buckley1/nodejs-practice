const esFive = (function () {
  console.log("es5 variable", this);
})();

const esSix = () => {
  console.log("es6 variable", this);
};
// esFive();
esSix();

// https://www.youtube.com/watch?v=kb0Af7dzCTs

// es5 way of making an api call
fetch("https://www.google.com/")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

//   es6 way of api call

const esSixApiCall = async () => {
  try {
    const data = await fetch("https://www.google.com/");

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
esSixApiCall();
