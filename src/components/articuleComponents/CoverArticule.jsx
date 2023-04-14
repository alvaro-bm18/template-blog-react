import '../../sass/articuleComponents/CoverArticule.scss';

function CoverArticule({ img }) {
    return (
        <>
            <figure className='cover-articule'>
                <img alt={img.alt} src={img.src} />
                <figcaption>{img.caption}</figcaption>
            </figure>
        </>
    );
}

export default CoverArticule;