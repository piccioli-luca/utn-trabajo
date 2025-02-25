import Layout from '../../components/Layout.jsx'
import { useEffect, useState } from 'react'
import './api.css'

function ApiPage () {
    const [catImage, setCatImage] = useState("https://avatars.githubusercontent.com/u/200429001?s=48&v=4")
    
    const FetchCatImage = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await response.json()
        const RandomCatImage = data.message
        console.log(RandomCatImage)
        setCatImage(RandomCatImage)
        // return RandomCatImage
    }
    
    useEffect(() => {
        FetchCatImage()
    }, []
)

    return <Layout>
            <h1>Gatos surtidos:</h1>
            <img src={catImage}/>
        </Layout>
}

export default ApiPage