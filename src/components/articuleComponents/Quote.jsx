import '../../sass/articuleComponents/Quote.scss';

function QuoteArticule({ quote, autor }) {
    return (
        <>
            <blockquote className='quote'>
                {quote}
                <span>by {autor}</span>
            </blockquote>
        </>
    );
}

export default QuoteArticule;