import css from "styled-jsx/css"
import HeaderLayout from "../mocules/HeaderMenu/HeaderLayout";

const style = css`
    .centering {
        display: flex;
        justify-content: center;
    }

    .fixedWidth {
        width: 70%;
    }
`

const AppLayout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <div className="centering">
                <div className="fixedWidth">
                    <HeaderLayout homeTitle='Best Seller' />
                    {props.children}
                    </div>
            </div>
            <style jsx>{style}</style>
        </>
    )
}

export default AppLayout;