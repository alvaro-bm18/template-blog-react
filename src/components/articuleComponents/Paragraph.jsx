import '../../sass/articuleComponents/Paragraph.scss';
import ContentList from './ContentList';
import FigureImg from "./FigureImg";

function Paragraph({ type, text, ...img }) {
    const paragraph = <p className={type}>{text}</p>;
    let content;

    if (type === "img") {
        const figure = <FigureImg src={img.imgSrc} alt={img.imgAlt} text={img.imgText} position={img.imgPos} />;
        content = <div>{figure}{paragraph}</div>;
    }

    if (type.includes('table-content')) {
        const titles = img.titles;
        const content_list = <ContentList titles={titles}/>;
        content = <div>{content_list}{paragraph}</div>
    }

    return (
        <>
            <div>
                {content ? content : paragraph}
            </div>
        </>
    );
}

export default Paragraph;