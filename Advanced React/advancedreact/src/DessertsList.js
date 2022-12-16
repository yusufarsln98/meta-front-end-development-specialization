function DessertsList(props) {
    const lightDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((d1, d2) => {
      return d1.calories < d2.calories;
    })
    .map((dessert) => { 
       return ( 
         <li>
           {dessert.name} - {dessert.calories} cal 
         </li> 
       ); 
     }); 
  
    
    return (
      <ul>{lightDesserts}</ul>
    );
  }
  
  export default DessertsList;
  