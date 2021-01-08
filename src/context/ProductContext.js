import React, { useState, useEffect} from 'react'
import {getFirestore} from "../firebase"

export const ProductContext = React.createContext()

export function ProductContexProvider( { children } ) {
    const [prods, setProds] = useState([])
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("Productos")
        itemCollection.get().then((querySnapshot) => {
            const items = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
            setProds(items)          
        }).finally(() => {
            setTimeout(() => {
            }, 3000)
        })

    }, [])
    return <>
        <ProductContext.Provider value= {{prods }} >
            {children}
        </ProductContext.Provider>
    </>
}