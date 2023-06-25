
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
        color: black;
    }

    div {
        color: lightcoral;
    }
`

type Props = {
    name: string;
}

const InfoAuthor = (props: Props): React.ReactElement => {
    const { name } = props

    return (
        <>          
            <div>{name}</div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default InfoAuthor;