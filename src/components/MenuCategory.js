import React from 'react'
import '../components/MenuCategory.css'
import { Link } from 'react-router-dom'

const categories = [{
    category: "Plantas",
    categoryId: 1
},
{
    category: "Macetas",
    categoryId: 2
},
{
    category: "Combos",
    categoryId: 3
}
]

function MenuCategory() {


    return <>
        <div className="MenuCategory">
            {categories
                .map((cat) =>
                    <div key={cat.categoryId} >
                        <Link to={`/categories/${cat.category}`}>
                            <p className="textCat"> {cat.category} </p>
                        </Link>
                    </div>
                )}
        </div>
    </>
}

export default MenuCategory