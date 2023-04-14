import '../../sass/articuleComponents/TitleArticule.scss';
function TitleArticule({ text }) {
    return (
        <>
            <h1 className='ttl-articule-head'>{text}</h1>
        </>
    );
}

export default TitleArticule;