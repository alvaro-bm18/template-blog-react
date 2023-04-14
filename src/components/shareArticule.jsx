import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import '../sass/ShareArticule.scss';

function ShareArticule() {
    const toggleOptionsShare = () => {
        const TRANSITION = 400;
        const SEPARATION = 18;
        const WIDTH_BTN = 28;
        const btns = document.querySelectorAll('.option-share');

        const btn = document.querySelector('#option-share-button');
        const klass = btn.className;
        btn.disabled = true;

        if (klass === 'show-options') {
            for (let i = 0; i < btns.length; i++) {
                const LEFT = (i + 1) * (WIDTH_BTN + SEPARATION);
                btns[i].style.left = `${LEFT}px`;
            }
        }
        else {
            for (let i = 0; i < btns.length; i++) {
                btns[i].style.transform = 'scale(0.2)';
            }
        }

        setTimeout(() => {
            btn.disabled = false;

            for (let i = 0; i < btns.length; i++) {
                if (klass === 'show-options') {
                    btns[i].style.transform = 'scale(1)';
                } else {
                    btns[i].style.left = '0px';
                }
            }

            btn.className = klass === 'show-options' ? 'hidden-options' : 'show-options';
        }, TRANSITION);
    }
    return (
        <>
            <div id='share-articule-options'>
                <button id='option-share-button' className='show-options' onClick={toggleOptionsShare}>
                    <FaShareAlt />
                </button>
                <button className='option-share' title='share on Facebook'>
                    <FaFacebookF />
                </button>
                <button className='option-share' title='share on Whatsapp'>
                    <FaWhatsapp />
                </button>
                <button className='option-share' title='share on Messenger'>
                    <FaFacebookMessenger />
                </button>
                <button className='option-share' title='copy link'>
                    <FaCopy />
                </button>
            </div>
        </>
    );
}

export default ShareArticule;