import React from "react";
import DessertsList from "./DessertsList";

function ListFilter() {
    const desserts = [
        {
          name: "Chocolate Cake",
          calories: 400,
          createdAt: "2022-09-01",
        },
        {
          name: "Ice Cream",
          calories: 200,
          createdAt: "2022-01-02",
        },
        {
          name: "Tiramisu",
          calories: 300,
          createdAt: "2021-10-03",
        },
        {
          name: "Cheesecake",
          calories: 600,
          createdAt: "2022-01-04",
        },
      ];


    return (
        <div>
            <h1>List filter, sort and map practice</h1>
            <h2>List of low calorie desserts:</h2>
            <DessertsList data={desserts} />
            </div>
    );
}

export default ListFilter
