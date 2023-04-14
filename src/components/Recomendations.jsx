import img from '../img-example-1.jpg';
import '../sass/Recomendations.scss';

function Recomendations() {
    function Recomendation({ src, title, text }) {
        return (
            <>
                <figure className='recomendation'>
                    <img src={src} />
                    <figcaption>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <div className='link-to-recomendation'>
                            ver más
                        </div>
                    </figcaption>
                </figure>
            </>
        );
    }
    return (
        <>
            <section className="recomend-section">
                <Recomendation
                    src={img}
                    title="Mi recomendation 1"
                    text="Loremi perspiciatis accusamus nulla tempora Loremi perspiciatis accusamus nulla tempora."
                />
                <Recomendation
                    src={img}
                    title="Mi recomendation 2"
                    text="Loremi perspiciatis accusamus nulla tempora Loremi perspiciatis accusamus nulla tempora."
                />
            </section>
        </>
    );
}

export default Recomendations;