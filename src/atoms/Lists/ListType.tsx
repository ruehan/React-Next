import { InfoState } from "@/atom";

import Link from "next/link";
import { useRecoilState } from "recoil";
import css from "styled-jsx/css"
import Cookies from 'js-cookie'

const style = css`
    a {
        text-decoration: none;
        color: black;
        font-family: 'Shadows Into Light', cursive;
    }
`

type Props = {
    href: string
    name: string;
}

const ListType = (props: Props): React.ReactElement => {
    const { href, name } = props
    const [listName, setListName] = useRecoilState<string>(InfoState)

    const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setListName(e.currentTarget.innerText)
        Cookies.set('listName', e.currentTarget.innerText)
    }

    return (
        <>          
            <Link legacyBehavior href={href}><a onClick={onClick}>{name}</a></Link>
            <style jsx>{style}</style>
        </>
        
    )
}

export default ListType;