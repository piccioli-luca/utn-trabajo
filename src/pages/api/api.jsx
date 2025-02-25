import { useEffect, useState } from 'react'
import { Link } from '../../components/Link.jsx'
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

    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <Link url='./'>Home</Link>
                <Link url='./api'>Ver Gatos</Link>
                <Link url='./contact'>Contactar</Link>
            </div>
        </header>
        <h1>Gatos surtidos:</h1>
        <img src={catImage}/>
    </div>
}

export default ApiPage