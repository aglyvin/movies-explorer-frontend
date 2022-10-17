import "./Link.css"

interface Props {
    title: string;
    url: string;
    mod: string;
}

export function Link({ title, url, mod = "" }: Props) {
    return (
        <li className="link">
            <a
                className={`link__item link__item_type_${mod}`} 
                href={url}>
                    {title}
            </a>
        </li>
    )
}

export default Link;