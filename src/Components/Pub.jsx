import React from "react";
import { Link } from "react-router-dom";

export default function Pub(props) { //Banderole de pub en haut


    const [active, setActive] = React.useState(false)

    const [scrollPosition, setScrollPosition] = React.useState(0); // Recuperer le scroll position
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (position >= 200) {
            setActive(true)
        }else{
            setActive(false)
        }

    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <span className={active ? "Pub Pub-active" : "Pub"}><p><Link to='/'>Alex Hitchens</Link> / {props.title}</p> <Link to={props.link}>Accéder pour {props.price}</Link></span>
    )
}