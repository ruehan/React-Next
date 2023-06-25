
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
        color: black;
    }
`

type Props = {
    name: string;
}

const InfoName = (props: Props): React.ReactElement => {
    const { name } = props

    return (
        <>          
            <div>{name}</div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default InfoName;