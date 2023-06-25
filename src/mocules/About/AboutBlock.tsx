import AboutHeader from "@/atoms/About/AboutHeader";
import AboutText from "@/atoms/About/AboutText";

import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
    }

    div {
        width: 100%;
        height: 100%;
        padding: 20px;
        
        align-self: center;
        background: transparent;
        transition: all 0.5s ease;
        color: #41403e;
        letter-spacing: 1px;
        outline: none;
        box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, .2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px #41403e;
        margin-top: 50px;
    }
`

type Props = {
    header: string;
    text: string;
    text2: string;
}

const AboutBlock = (props: Props): React.ReactElement => {
    const { header, text, text2 } = props

    return (
        <>          
            <div>
                <AboutHeader title={header} />
                <AboutText title={text} />
                <AboutText title={text2} />
            </div>

            <style jsx>{style}</style>
        </>
        
    )
}

export default AboutBlock;