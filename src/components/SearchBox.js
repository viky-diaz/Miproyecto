import React, {useEffect} from 'react'
import { useSearchContext } from '../context/SearchContext'
import '../components/SearchBox.css'

function SearchBox() {
    const {inputValue, getValue} = useSearchContext()

    useEffect(() => {

    },[inputValue])

    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control" type="search" 
            placeholder="Search" aria-label="Search" onChange={event => getValue(event.target.value)} />
        </form>
    )
}

export default SearchBox
