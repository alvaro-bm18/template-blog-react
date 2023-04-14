import '../../sass/articuleComponents/FigureImg.scss';

function FigureImg({ src, alt, text, position }) {
    function setResolution(e) {
        e.preventDefault();
        const img = e.target;
        const container = img.parentNode;
        const w = img.offsetWidth;
        const h = img.offsetHeight;

        container.classList.add(`fig-${(w > h) ? 'vtl' : 'hzt'}`);
    }
    function toggleImage(e) {
        e.preventDefault();
        let container;
        if (e.target.tagName === 'IMG') {
            container = e.target.parentNode;
        } else {
            if (e.target.tagName === 'FIGURE') {
                container = e.target;
            }
        }

        if (container.classList.contains('figure-articule')) {

            container.classList.remove('figure-articule');
            container.classList.add('figure-lightbox');

            if (container.classList.contains('fig-hzt')) {
                container.classList.remove('fig-hzt');
                container.classList.add('fig-hzt-lb');
            } else {
                container.classList.remove('fig-vtl');
                container.classList.add('fig-vtl-lb');
            }

        } else {
            container.classList.remove('figure-lightbox');
            container.classList.add('figure-articule');

            if (container.classList.contains('fig-hzt-lb')) {
                container.classList.remove('fig-hzt-lb');
                container.classList.add('fig-hzt');
            } else {
                container.classList.remove('fig-vtl-lb');
                container.classList.add('fig-vtl');
            }
        }
    }
    return (
        <>
            <figure
                className={`figure-articule fig-${position}`}
                onClick={toggleImage}>
                <img
                    src={src}
                    alt={alt}
                    title='click para ver'
                    onLoad={setResolution} />
                <figcaption>{text}</figcaption>
            </figure>
        </>
    );
}

export default FigureImg;