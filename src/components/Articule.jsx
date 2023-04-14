import '../sass/Articule.scss';
import TitleArticule from "./articuleComponents/TitleArticule";
import InfoAboutArticle from "./articuleComponents/InfoAboutArticule";
import CoverArticule from './articuleComponents/CoverArticule';
import Paragraph from './articuleComponents/Paragraph';
import Quote from './articuleComponents/Quote';

import setIDfromTitle from './scripts/prepareID.js';

import DATA from './content_articule.json';

function Articule() {
    const TITLES = DATA.content_articule.map(secc => secc.title);
    function SectionArticule({ SECTION }) {

        const CONTENT_SEC = SECTION.content.map((cont, index) => {
            if ('quote' in cont) {
                return <Quote key={`content-${index}`} quote={cont.quote} autor={cont.autor} />;
            } else {
                if (cont.type === 'img') {
                    return <Paragraph key={`content-${index}`} type={cont.type} text={cont.text} imgSrc={cont.imgSrc} imgAlt={cont.imgAlt} imgText={cont.imgText} imgPos={cont.imgPos} />;
                } else {
                    if (cont.type === 'table-content') {
                        return <Paragraph key={`content-${index}`} type={cont.type} text={cont.text} titles={TITLES} />;
                    } else {
                        return <Paragraph key={`content-${index}`} type={cont.type} text={cont.text} />;
                    }
                }
            }
        });
        return (
            <>
                <div id={setIDfromTitle(SECTION.title)}>
                    <h2 className='secction-title'>{SECTION.title}</h2>
                    {CONTENT_SEC}
                </div>
            </>
        );
    }

    function ArticuleContent({ SECTIONS_CONTENT }) {
        const BODY = SECTIONS_CONTENT.map((content, index) => <SectionArticule key={`section-${index}`} SECTION={content} />);
        return (
            <>
                <section className="articule-content">
                    {BODY}
                </section>
            </>
        );
    }

    return (
        <>
            <TitleArticule
                text={DATA.title} />

            <InfoAboutArticle info={DATA.info} />

            <CoverArticule img={DATA.cover} />

            <ArticuleContent SECTIONS_CONTENT={DATA.content_articule} />
        </>
    );
}

export default Articule;