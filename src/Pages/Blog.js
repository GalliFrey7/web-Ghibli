import React, {useState, useEffect} from 'react'
import axios from "axios"

const Blog = () => {

    const [data, setData] = useState([])
    console.log("data: " + data)

    data.map(item => console.log(item))

    useEffect(() => {
        axios.get("https://ghibliapi.herokuapp.com/films").then(res => setData(res.data))
    }, [])
    

    return (
        <div>
            {
                data.map(item => { return(
                    <div class="text-center m-4" key={item.id}>
                        <h2 class="font-weight-bold">{item.title}</h2>
                        <h3 class="font-italic">{item.original_title}</h3>
                        <p>{item.description}</p>
                        <p>{item.director}</p>
                        <img width="50%"className='center-block w-90 ' alt='wrong' src={item.image}></img>    
                    </div> 
                )
                })
            }
        </div>
    )
}

export default Blog

