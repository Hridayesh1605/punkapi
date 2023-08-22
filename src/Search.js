import React, { useState, useEffect } from 'react'
import Card from './Card';

const Search = () => {
    const [name, setName] = useState([]);
    const [search, setSearch] = useState("Vice Bier")




    useEffect(() => {

        const fetchapi = async () => {
            const url = `https://api.punkapi.com/v2/beers?beer_name=${search}`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setName(resJson);
        }
        fetchapi();
        
    }, [search])
    return (
        <>
            <input type='text' placeholder='Search items' onChange={(e) => {
                setSearch(e.target.value)

            }} />

            {
                name.map((val) => {
                    return (
                        <Card
                            key={val.id}
                            image_url={val.image_url}
                            name={val.name}
                            description={val.description}
                        />

                    )

                })
            }

        </>
    )
}

export default Search
