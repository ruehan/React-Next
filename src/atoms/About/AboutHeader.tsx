import css from "styled-jsx/css"

const style = css`
    h1 {
        font-size: 50px;
        font-family: 'Shadows Into Light', cursive;
        margin-bottom: 20px;
        
        font-weight: 700;
    }
`

type Props = {
    title: string,
}

const AboutHeader = (props: Props): React.ReactElement => {
    const { title } = props

    return (
        <>          
            <h1>{title}</h1>
            <style jsx>{style}</style>
        </>
        
    )
}

export default AboutHeader;