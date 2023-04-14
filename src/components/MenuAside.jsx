import { FaElementor } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";

import '../sass/MenuAside.scss';

function MenuAside() {
    const simpleList = (title, items) => {
        const titleList = <h1 className='ttl-secction-aside'>{title}</h1>;
        const list = items.map(
            (item, index) =>
                <li key={`item-${index}`}>
                    <a href={item.link}>
                        {item.title}
                    </a>
                </li>
        );

        return (
            <>
                {titleList}
                <ul className='list-menu-aside'>{list}</ul>
            </>
        );
    }
    const Entries = () => {
        const entries = [
            {
                title: 'Entrada reciente 1',
                link: '#'
            },
            {
                title: 'Entrada reciente 2',
                link: '#'
            },
            {
                title: 'Entrada reciente 3',
                link: '#'
            },
            {
                title: 'Entrada reciente 4',
                link: '#'
            },
        ];

        const list = entries.map(
            (ent, index) =>
                <li key={`entries-${index}`}>
                    <a href={ent.link} className='icon'>
                        <FaElementor />
                        {ent.title}
                    </a>
                </li>
        );

        return (
            <>
                <h1 className='ttl-secction-aside'>Entradas</h1>
                <ul className='list-menu-aside'>{list}</ul>
            </>
        );
    }

    const Comments = () => {
        const commentsInfo = [
            {
                entry: 'HTML for dummies',
                comment: 'I have a doubt about that',
                link: '#'
            },
            {
                entry: 'CSS for dummies',
                comment: 'I have a doubt about that',
                link: '#'
            },
            {
                entry: 'JAVASCRIPT for dummies',
                comment: 'I have a doubt about that',
                link: '#'
            },
            {
                entry: 'REACT for dummies',
                comment: 'I have a doubt about that',
                link: '#'
            }
        ];
        const list = commentsInfo.map(
            (comment, index) =>
                <li key={`comments-${index}`}>
                    <a href={comment.link} className='icon'>
                        <FaCommentAlt />
                        <span>{comment.comment}</span>{` at `}
                        <span>{comment.entry}</span>
                    </a>
                </li>
        );
        return (
            <>
                <h1 className='ttl-secction-aside'>ultimos comentarios</h1>
                <ul className='list-menu-aside'>{list}</ul>
            </>
        );
    }
    const Archive = () => {
        const archive = [
            { title: '2010', link: '#' },
            { title: '2011', link: '#' },
            { title: '2012', link: '#' },
            { title: '2013', link: '#' }
        ];
        return simpleList('Archive', archive);
    }

    const line = <div className='line'><span></span></div>;

    return (
        <>
            <Entries />
            {line}
            <Comments />
            {line}
            <Archive />
        </>
    );
}

export default MenuAside;