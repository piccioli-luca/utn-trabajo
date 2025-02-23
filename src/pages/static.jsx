import './static.css'

function StaticPage () {
    return <div>
        <header>
            <p>GatosLindos.com</p>
            <div className='headerButtons'>
                <button>Ver Gatos</button>
                <button>Contactar</button>
            </div>
        </header>
        <h1>Bienvenidos a GatosLindos.com!</h1>
        <h2>Colectamos gatos lindos mediante APIs sobre todo el internet.</h2>
    </div>
}

export default StaticPage