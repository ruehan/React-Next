
import css from "styled-jsx/css"

const style = css`
    a {
        text-decoration: none;
        color: black;
    }

    div {
        color: lightcoral;
        border: 1px solid black;
        width: 40%;
        /* position: absolute; */
        margin-left: 10%;
        margin-top: 15px;
        font-size: 20px;
        margin-bottom: 10px;
        height: 40px;
        align-items: center;
        line-height: 25px;
        display: flex;

        align-self: center;
        background: transparent;
        transition: all 0.5s ease;
        color: #41403e;
        letter-spacing: 1px;
        outline: none;
        box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, .2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px #41403e;
    }

    div:hover {
        transform: scale(1.2);
    }
`

type Props = {
    href: string
}

const InfoBuy = (props: Props): React.ReactElement => {
    const { href } = props

    return (
        <>          
            <div>
                <a href={href} target="_blank">Buy Now</a>
            </div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default InfoBuy;