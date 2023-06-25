
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
    }

    p {
        font-size: 22px;
        margin-bottom: 20px;
    }
`

type Props = {
    title: string,
}

const AboutText = (props: Props): React.ReactElement => {
    const { title } = props

    return (
        <>          
            <p>{title}</p>
            <style jsx>{style}</style>
        </>
        
    )
}

export default AboutText;