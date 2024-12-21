import Pizza  from "./Pizza";
import { useState , useEffect } from "react";


const intl = new Intl.NumberFormat("en-us",{
    style:"currency",
    currency:"USD"
})

export default function Order() {
   
    const [pizzaTypes,setPizzaTypes]= useState([])
    const [pizzaType,setPizzaType] = useState("pepperoni");
    const [pizzaSize,setPizzaSize] = useState("M");
    const [loading,setLoading] =useState(true);


    return (
        <div className="order">
            <h2>Create Order</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type"> Pizza Type </label>

                        <select 
                            
                            onChange={(e) =>setPizzaType(e.target.value) }
                            name="pizza-type" value={pizzaType}>

                            <option value="pepperoni">The Pepperoni Pizza</option>
                            <option value="hawaiian">The Hawaiian Pizza</option>
                            <option value="big_meat">The Big Meat Pizza</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                checked={pizzaSize === 'S'}
                                type="radio"
                                name="pizza-size"
                                value="S"
                                id="pizza-s"
                                >
                                
                                </input>
                                <label htmlFor="pizza-s">Small</label>
                            </span>

                            {/* Medium size */}
                            <span>
                                <input
                                checked={pizzaSize === 'M'}
                                type="radio"
                                name="pizza-size"
                                value="M"
                                id="pizza-m"
                                >
                                
                                </input>
                                <label htmlFor="pizza-m">Medium</label>
                            </span>

                            {/* Large size */}
                            <span>
                                <input
                                checked={pizzaSize === 'L'}
                                type="radio"
                                name="pizza-size"
                                value="L"
                                id="pizza-l"
                                >
                                
                                </input>
                                <label htmlFor="pizza-s">Large</label>
                            </span>

                        </div>


                        <div className="order-pizza">

                            <Pizza 
                            name="Pepperoni"
                            description="another pep pizza"
                            // image="/public/pizzas/pepperoni.webp"
                            image="/pizzas/pepperoni.webp"

                            />
                            <p>$ 13.75 </p>
                        </div>



                    </div>
                    <button type="submit">Add to cart </button>


                   


                </div>
            </form>
        </div>
    )
}