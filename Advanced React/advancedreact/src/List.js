import React from "react";

function List() {
    const data = [
        {
            id: "1",
            title: "Tiramisu",
            description: "The best tiramisu in the town",
            image: "https://picsum.photos/200/300?random=1",
            price: "$5.00",    
        },
        {
            id: "2",
            title: "Limon Ice Cream",
            description: "Mind blowing taste of lemon",
            image: "https://picsum.photos/200/300?random=2",
            price: "$4.00",
        },
        {
            id: "3",
            title: "Chocolate Cake",
            description: "The best chocolate cake in the town",
            image: "https://picsum.photos/200/300?random=3",
            price: "$6.00",
        }
    ]
                                  // Dessert is the element of the array
    const topDesserts = data.map((dessert) => {
        return {
            // Data transformation
            content: `${dessert.title} - ${dessert.price}`,
            price: dessert.price,
            image: dessert.image,
        }
    })

    // Return the list in react component
    const listElements = data.map((dessert) => {
        return (
            <li>
                <img src={dessert.image} alt={dessert.description} />
                <h3>{dessert.title}</h3>
                <p>{dessert.price}</p>
            </li>
        )
    })

    return (
        <div>
            <h1>Practice on lists - Map method - Transform data</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <h2>Top Desserts</h2>
                    {/* Use the list in react component */}
                    <ul>
                        {topDesserts.map((dessert) => {
                            return (
                                <li>
                                    <img src={dessert.image} alt={dessert.content} />
                                    <h3>{dessert.content}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h2>Top Desserts</h2>
                    {/* Use the list in react component */}
                    <ul>
                        {listElements}
                    </ul>
                </div>  
            </div>

        </div>
    );
}

export default List
