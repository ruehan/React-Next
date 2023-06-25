import Link from "next/link";
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
    }
`

type Props = {
    title: string,

}

const HeaderTitle = (props: Props): React.ReactElement => {
    const { title } = props

    return (
        <>
            <Link legacyBehavior href={`/${title === "About" ? 'about' : ''}`}><a>{title}</a></Link>
            
            <style jsx>{style}</style>
        </>
        
    )
}

export default HeaderTitle;