import { plantlist } from "../data/plantlist"
import "../Style/ShoppingList.css"


function ShoppingList(){
    const categorie = plantlist.reduce((acc, plant) =>
    acc.includes(plant.category) ? acc: acc.concat(plant.category),
    []
    ) 
    return(
        <div>
			<ul>
				{categorie.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className="img-plant-list">
				{plantlist.map((plant) => (
					<li className="img-plant-item" key={plant.id}>
                        {plant.name}{plant.isBestSale && plant.category === "classique" && <span>🔥</span>}
                        {plant.isSpecialOffer && <div className="img-sales">Soldes</div>}
                        </li>
				))}
			</ul>
		</div>
       
    )
}

export default ShoppingList 



