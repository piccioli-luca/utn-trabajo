import Layout from '../../components/Layout.jsx'
import { useEffect, useState } from 'react'
import './api.css'

function ApiPage () {
    const [catImage, setCatImage] = useState("https://avatars.githubusercontent.com/u/200429001?s=48&v=4")
    
    const FetchAPI = async (apiLink, setter) => {
        const response = await fetch(apiLink)
        const data = await response.json()
        const RandomCatImage = data.message
        console.log(RandomCatImage)
        setter(RandomCatImage)
        // return RandomCatImage
    }
    
    useEffect(() => {
        // Grabs an image of a 'cat'.
        FetchAPI("https://dog.ceo/api/breeds/image/random", setCatImage)
    }, []
)

    return <Layout>
            <h1>Gatos surtidos:</h1>
            <img src={catImage}/>
        </Layout>
}

export default ApiPage