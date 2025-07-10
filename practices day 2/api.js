const searchbnt = document.getElementById("search_bnt");

searchbnt.addEventListener('click', function() {
    const user_find_food = document.getElementById("food_name");
    let foodName = user_find_food.value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    let resultdev = document.getElementById("result");

    if (foodName === '') {
        alert("Enter your food name");
    } else {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.meals === null) {
                resultdev.innerHTML = "<p>No food found!</p>";
            } else {
                let output = "";
                json.meals.forEach(meal => {
                    output += `
                        <div class="meal-card">
                            <h3>${meal.strMeal}</h3>
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <p>${meal.strInstructions.substring(0, 150)}...</p>
                        </div>
                    `;
                });
                resultdev.innerHTML = output;
            }
        });
    }
});
