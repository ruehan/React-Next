
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
        color: black;
    }

    img {
        width: 90%;
    }
`

type Props = {
    href: string
}

const InfoImg = (props: Props): React.ReactElement => {
    const { href } = props

    return (
        <>          
            <img src={href}></img>
            <style jsx>{style}</style>
        </>
        
    )
}

export default InfoImg;