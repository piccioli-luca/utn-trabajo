import Layout from '../../components/Layout.jsx'
import { useEffect, useState } from 'react'
import './api.css'

function ApiPage () {
    const [catImage, setCatImage] = useState("https://avatars.githubusercontent.com/u/200429001?s=48&v=4")
    const [catFact, setCatFact] = useState("Los gatos son muy lindos.")
    
    const FetchURL = async (setter, response) => {
        const data = await response.blob() // Convert image response to blob
        console.log(data)
        const FetchedURL = URL.createObjectURL(data) // Convert blob to URL
        return setter(FetchedURL)
        
    }

    const FetchText = async (setter, response) => {
        const data = await response.json()
        console.log(data)
        const FetchedText = data.fact
        return setter(FetchedText)
        
    }
    
    const FetchAPI = async (apiLink, setter, type) => {
        const response = await fetch(apiLink)
        return type == 'URL' ? FetchURL(setter, response) : FetchText(setter, response)
    }
    
    
    
    useEffect(() => {
        console.log("Calling FetchAPI")
        // Grabs an image of a 'cat'.
        console.log("Fetching fact...")
        FetchAPI("https://catfact.ninja/fact", setCatFact, 'fact')
        console.log("Fetching image...")
        FetchAPI("https://cataas.com/cat", setCatImage, 'URL')
    }, []
)

    return <Layout>
            <h2>Gato aleatorio:</h2>
            <img src={catImage}/>
            <h2>Informacion de los ingleses:</h2>
            <h4>{catFact}</h4>
        </Layout>
}

export default ApiPage