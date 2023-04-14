import '../sass/Header.scss';

function Header() {
    return (
        <header className='app-header'>
            <h1>Código Espaguetti 🍝</h1>
            <nav>
                <a href="#">blog</a>
                <a href="#">nosotros</a>
                <div className='sub-menu-container'>
                    <span>templates</span>
                    <div className='sub-menu'>
                        <div className='sub-menu-options'>
                            <a href="#">template blog</a>
                            <a href="#">template portfolio</a>
                        </div>
                    </div>
                </div>
                <a href="/github">github</a>
            </nav>
        </header>
    );
}

export default Header;