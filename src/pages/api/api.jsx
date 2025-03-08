import Layout from '../../components/Layout.jsx'
import { useEffect, useState } from 'react'
import './api.css'
import { TaggedContentCard } from 'react-ui-cards';


function ApiPage () {
    const [catImage, setCatImage] = useState("")
    const [catTags, setCatTags] = useState(['cute'])
    const [catFact, setCatFact] = useState("Cats are wonderful.")
    
    const FetchImage = async (allTags) => {
        let url = "https://cataas.com/cat"
        if (allTags.length > 0)
            url += `/${allTags}`
        // Return a JSON object.
        url += "?json=true"
        const response = await fetch(url);
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        let data;

        if (contentType && contentType.includes("application/json")) {
            data = await response.json();  // Parse as JSON
        } else {
            data = await response.text();  // Parse as plain text
        }

        if (data === "Cat not found") {
            setCatTags(["No cat found!"]);  // Set the tag to "No cat found!" if no cat is found
            setCatImage("");  // Optionally clear the image when no cat is found
        } else {
        const firstTags = data.tags.slice(0, 5) // Only the first 5 to prevent card overflow
        setCatImage(data.url);
        setCatTags(firstTags)}
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
            <h2>Tagged Cats:</h2>
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
                <button type="submit">Get Tagged Cat</button>
            </form>
            <h3>Try these out: gif, box, silly, loaf</h3>
            <h2>Cat Fact!</h2>
            <h4>{catFact}</h4>
            <button onClick={FetchText}>More Facts!</button>
        </Layout>
}

export default ApiPage