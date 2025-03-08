import { useEffect } from 'react';
import { Link } from '../components/Link.jsx'
import './Layout.css'

function Layout (props) {
    // The layout looks like random cat fur patterns.
    const colorCombinations = [
        // Tabby
        {header: 'slategrey', body:'grey', headertext:'black', bodytext:'black'},
        // Orange
        {header: 'orange', body:'peachpuff', headertext:'white', bodytext:'white'},
        // Tux
        {header: 'black', body:'white', headertext:'white', bodytext:'black'},
        // Tortoiseshell (somewhat)
        {header: 'beige', body:'white', headertext:'black', bodytext:'black'},
        // Smoke
        {header: 'gray', body:'darkgray', headertext:'black', bodytext:'black'},
        // Sphinx
        {header: 'silver', body:'lavenderblush', headertext:'black', bodytext:'black'}

    ];
    const colors = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    
    useEffect(() => {
        document.body.style.backgroundColor = colors.body
    })

    return <div>
        <header style= {{backgroundColor: colors.header}}>
            <p style= {{color: colors.headertext}}>CuteCats.com</p>
            <ul className='headerButtons'>
                <li><Link url='./' style={{color: colors.headertext}}>Home</Link></li>
                <li><Link url='./api' style={{color: colors.headertext}}>Cats!</Link></li>
                <li><Link url='./contact' style={{color: colors.headertext}}>Contact</Link></li>
            </ul>
        </header>
        {props.children}
    </div>
}

export default Layout