import '../../sass/articuleComponents/InfoAboutArticule.scss';
import { FaCalendarAlt } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function InfoAboutArticle({ info }) {
    return (
        <>
            <div className='info-articulo-itself'>
                <p><FaCalendarAlt />{info.date}</p>
                <p><FaCommentAlt />{`${info.comments} comments`}</p>
                <p><FaEye />{`${info.views} views`}</p>
            </div>
        </>
    );
}

export default InfoAboutArticle;