import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

import { FaUser } from 'react-icons/fa';
import '../sass/Author.scss';

function Author() {
    return (
        <>
            <section className='author-secc'>
                <div className='card-author'>
                    <div className='author-picture'>
                        <FaUser />
                    </div>
                    <h2>Alvaro Barrera</h2>
                    <span>Front End Developer</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <ul>
                        <li>
                            <a href='#'>
                                <FaFacebookF />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <FaFacebookMessenger />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Author;