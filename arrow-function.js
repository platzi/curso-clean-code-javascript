// El return está implícito sino añadimos las llaves.
const getResult = () => "Results";

//Sin arrows functions
[1, 2, 3]
  .map(function (n) {
    return n * 2;
  })

  [
    // Con arrows functions
    (1, 2, 3)
  ].map((n) => n * 2);

// Ejemplos del this
const counter = {
  number: 0,
  increase() {
    setInterval(() => console.log(++this.number), 1000);
  },
};

counter.increase(); //> 1 2 3 4 5

const counter = {
  number: 0,
  increase() {
    setInterval(function () {
      console.log(++this.number);
    }, 1000);
  },
};

counter.increase(); //> NaN, NaN, NaN, NaN, NaN

const counter = {
  number: 0,
  increase() {
    setInterval(
      function () {
        console.log(++this.number);
      }.bind(this),
      1000
    );
  },
};

counter.increase(); //> 1 2 3 4 5
