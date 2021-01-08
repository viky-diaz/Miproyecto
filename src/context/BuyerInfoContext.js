import React, { useContext, useState } from 'react'

export const BuyerInfoContext = React.createContext()

export const useBuyerInfoContext = () => useContext(BuyerInfoContext)

export function BuyerInfoContextProvider( {children} ) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")    
    const [mail, setMail] = useState("")
    const [confirmMail, setConfirmMail] = useState("")
    const [tel, setTel] = useState("")

    
    const submitHandler = (e) => {
        e.preventDefault()
    }

    const buyerInfo = {
        name: name,
        surname: surname,
        mail: mail,
        tel: tel,
    }

    return (
        <BuyerInfoContext.Provider value= {{ buyerInfo, confirmMail, mail, setName, setSurname, setMail, setTel, submitHandler, setConfirmMail}} >
            {children}
        </BuyerInfoContext.Provider>
    )

}