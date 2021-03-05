function counter() {
  const decrement = document.querySelector("[data-button=decrement]");
  const increment = document.querySelector("[data-button=increment]");
  const display = document.querySelector("[data-counter-display]");
  let value = 0;

  decrement.addEventListener("click", handleClick);
  increment.addEventListener("click", handleClick);

  function handleClick(e) {
    const buttonType = e.target.dataset.button;

    if (buttonType === "decrement") {
      value--;
    } else {
      value++;
    }
    updateDiplay();
  }

  function updateDiplay() {
    display.classList.remove("positive-number", "negative-number");
    display.innerText = value;
    if (value >= 0) {
      display.classList.add("positive-number");
    } else {
      display.classList.add("negative-number");
    }
  }

  console.log("x");
}
counter();

function bmiCalculator() {
  const bmiForm = document.querySelector("[data-bmi-form]");
  const display = bmiForm.querySelector("[data-bmi-display]");

  bmiForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const bmi =
      Number(bmiForm.elements.greutate.value) /
      Number(bmiForm.elements.inaltime.value) ** 2;

    display.innerText = `BMI-ul este ${bmi}`;
  });
}
bmiCalculator();

function movies() {
  const movieList = document.querySelector("[data-movies]");
  const data = [
    {
      id: 1,
      title: "Pe aripile vantului",
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Titanic",
      imageUrl: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Rambo",
      imageUrl: "https://picsum.photos/200/300?random=3",
    },
    {
      id: 4,
      title: "Inception",
      imageUrl: "https://picsum.photos/200/300?random=4",
    },
    {
      id: 5,
      title: "Inchisoarea ingerilor",
      imageUrl: "https://picsum.photos/200/300?random=5",
    },
    {
      id: 6,
      title: "Razbunarea",
      imageUrl: "https://picsum.photos/200/300?random=6",
    },
  ];
  const fragmentMovieList = document.createDocumentFragment();

  data.forEach((item) => {
    const container = document.createElement("div");
    const link = document.createElement("a");
    const movieImg = document.createElement("img");
    movieImg.src = item.imageUrl;
    movieImg.alt = item.title;
    link.href = item.imageUrl;
    link.target = "_blank";
    link.appendChild(movieImg);
    link.appendChild(document.createTextNode(item.title));
    container.appendChild(link);
    container.classList.add("col");
    container.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    fragmentMovieList.appendChild(container);
  });

  movieList.appendChild(fragmentMovieList);
}

movies();
