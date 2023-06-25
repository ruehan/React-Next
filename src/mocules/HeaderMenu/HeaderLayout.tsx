
import HeaderTitle from "@/atoms/HeaderMenu/HeaderTitle";
import React from "react";
import css from "styled-jsx/css"

const style = css`
    .header {
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        font-family: 'Fredericka the Great', cursive;

        background: transparent;
        padding: 1rem 1rem;
        color: #41403e;
        font-size: 2rem;
        letter-spacing: 1px;
        outline: none;
        box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, .2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 7px #41403e;
    }
`

interface HeaderLayoutProps {
    homeTitle: string;
}

const HeaderLayout = (props: HeaderLayoutProps): React.ReactElement => {

    const { homeTitle } = props
    
    return(
        <>
            <title>{homeTitle}</title>
            <div className='header'>
                <HeaderTitle title='Home' />
                <HeaderTitle title='About' />
            </div>
            <style jsx>{style}</style>
        </>
    )
}


export default HeaderLayout;