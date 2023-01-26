import "mvp.css";
import "../css/style.scss";
import axios from "axios";

document.querySelector("form").onsubmit = async (e) => {
  e.preventDefault();
  const { value } = document.querySelector("form input[type=text]"); // dit is de lange notatie zonder objectdestructor const val = document.querySelector("form input[type=text]").value;
  console.log(value);
  if (value.length >= 2) {
    const response = await axios(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + value
    );
    if(response.data.drinks){
        document.querySelector("section").innerHTML = response.data.drinks.map(
            ({strDrink, strDrinkThumb})=>
            `<aside>
          <h2>${strDrink}</h2>
          <img src="${strDrinkThumb}" alt="${strDrink}" />
        </aside>`
        ).join("")
    }
  }
};
