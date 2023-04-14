import Header from './Header';
import MenuAside from './MenuAside';
import Articule from './Articule';
import Recomendations from './Recomendations';
import ShareArticule from './shareArticule';
import Newsletter from './Newsletter';
import Author from './Author';
import FooterArticule from './FooterArticule';
import Footer from './Footer';

import '../sass/App.scss';


function App() {
  return (
    <div className="app">
      <Header />
      <main id='app-content'>
        <header className='search-section'>
          <ShareArticule />
          <input type='text' placeholder='search...' />
        </header>
        <section id='content-articule-app'>
          <article>
            <Articule />
            <Recomendations />
          </article>
          <aside>
            <MenuAside />
          </aside>
        </section>
        <Author />
        <Newsletter />
        <FooterArticule />
      </main>
      <Footer />
    </div>
  )
}

export default App;