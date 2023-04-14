import '../sass/Newsletter.scss';

function Newsletter(){
    return (
        <>
            <section className="newsletter">
                <form>
                    <label htmlFor='email'>subscribe my newsletter</label>
                    <input id='email' type="text" placeholder="correo electronico" />
                    <button>subscribir</button>
                </form>
            </section>
        </>
    );
}

export default Newsletter;