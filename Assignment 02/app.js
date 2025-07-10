const loadAllProduct = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((data) => {
      if (data.drinks) {
        displayData(data.drinks.slice(0, 8)); 
      }
    });
};

const displayProduct = (products) => {
    const productContainer = document.getElementById("userData-Containar")

    products.forEach(product => {
        const div=document.createElement("div");

        div.innerHTML = `
        <img src="" alt=""/>
        <h4></h4>
        <p></p>
        <p></p>
        <button>add to group</button>
        <button>details</button>
        `;

        productContainer.appendChild(div);
    })
}

loadAllProduct();

document.getElementById("item-search").addEventListener("click", () => {
    const inputValue = document.getElementById("search-box").value;
    const container = document.getElementById("userData-Containar");

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            if (data.drinks) {
                displayData(data.drinks);
            } else {
                container.innerHTML = "<h1>No drinks found</h1>";
            }
        })
        .catch((err) => {
            console.log(err)
        });
});

const displayData = (drinks) => {
    const container = document.getElementById("userData-Containar");
    container.innerHTML = "";

    drinks.forEach(drink => {
        const div = document.createElement("div");
        div.classList.add("user");

        div.innerHTML = `
            <img src="${drink.strDrinkThumb}" width="100">
            <h4>name:${drink.strDrink}</h4>
            <p>name: ${drink.strCategory}</p>
            <p>${drink.strInstructions.substring(0, 15)}...</p>
            <button>add to group</button>
            <button>details</button>
        `;

        container.appendChild(div);
    });
};