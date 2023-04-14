import '../../sass/articuleComponents/ContentList.scss';
import setHrefArray from '../scripts/prepareHREF.js';

function ContentsList({ titles }) {
    const LIST_SUB = titles;

    const LIST_HREF = setHrefArray(LIST_SUB);

    const LIST = LIST_SUB.map((item, index) => {
        return (
            <li key={`list_item_${index + 1}`}>
                <a href={`#${LIST_HREF[index]}`} key={`link_subtitle_${index + 1}`}>{item}</a>
            </li>
        );
    });

    const toggleContents = () => {

        const subContent = document.querySelector('.menu-contents-art');
        const content = document.querySelector('.content-menu');

        if (content.offsetTop === 0) {
            content.style.opacity = '0';
            content.style.top = `-${content.offsetHeight}px`;
            subContent.style.height = '0px';
        } else {
            content.style.opacity = '1';
            content.style.top = '0px';
            subContent.style.height = `${content.offsetHeight}px`;
        }
    }

    return (
        <>
            <div
                className="contents-articule"
                onClick={toggleContents} >

                <h3>Contents</h3>
                <div className="menu-contents-art">
                    <ul className="content-menu">
                        {LIST}
                    </ul>
                </div>

            </div>
        </>
    );
}

export default ContentsList;