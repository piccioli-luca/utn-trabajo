import Layout from '../../components/Layout.jsx'
import { useEffect, useState } from 'react'
import './api.css'
import { TaggedContentCard } from 'react-ui-cards';


function ApiPage () {
    const [catImage, setCatImage] = useState("")
    const [catTags, setCatTags] = useState(['cute'])
    const [catFact, setCatFact] = useState("Los gatos son muy lindos.")
    
    const FetchImage = async (allTags) => {
        let url = "https://cataas.com/cat"
        if (allTags.length > 0)
            url += `/${allTags}`
        // Return a JSON object.
        url += "?json=true"
        const response = await fetch(url);

        // Cataas returns a string if no image was found with given tags, so we check for this first and return placeholders.
        const textData = await response.text();
        if (textData === "Cat not found")
            setCatTags(["No cat found! Try another tag."])
        const data = JSON.parse(textData); // Converts text data, as response cannot be read twice.
        const firstTags = data.tags.slice(0, 5) // Only the first 5 to prevent card overflow
        setCatImage(data.url);
        setCatTags(firstTags)
    };


    const FetchText = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setCatFact(data.fact);

    };    useEffect(() => {
        console.log("Calling FetchAPI")
        // Grabs an image of a 'cat'.
        console.log("Fetching fact...")
        FetchText()
        console.log("Fetching image...")
        FetchImage(catTags)
    }, []
)
    
    // Handle form submission for updating the tags
    const handleTagSubmit = (e) => {
        e.preventDefault();
        const allTags = e.target.elements.tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag !== "");
        setCatTags(allTags);  // Update the catTags state with the new array
        FetchImage(allTags);  // Fetch a new image based on the new tags
    };

return <Layout>
            <h2>Gato aleatorio:</h2>
            <TaggedContentCard 
                thumbnail={catImage}
                tags={catTags}
            />
            <form onSubmit={handleTagSubmit}>
                <input
                    type="text"
                    name='tagsInput'
                    placeholder="e.g. cute, orange, loaf"
                />
                <button type="submit">Actualizar etiquetas</button>
            </form>
            <h2>Informacion de los ingleses:</h2>
            <h4>{catFact}</h4>
        </Layout>
}

export default ApiPage