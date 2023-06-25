
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
        color: black;
    }

    div {
        font-family: 'Shadows Into Light', cursive;
        font-size: 50px;
        text-align: center;
        margin: 20px;
    }
`

type Props = {
    header: string;
}

const ListHeader = (props: Props): React.ReactElement => {
    const { header } = props

    return (
        <>          
            <div>{header}</div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default ListHeader;