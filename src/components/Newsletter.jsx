import React from 'react';
import '../sass/Newsletter.scss';
import img from "../../public/img-example-1.jpg";

function Newsletter(){
    return (
        <>
            <section className="newsletter" style={{"backgroundImage": `url(${img})`}}>
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