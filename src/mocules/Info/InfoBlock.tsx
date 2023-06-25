
import InfoAuthor from "@/atoms/Info/InfoAuthor";
import InfoBuy from "@/atoms/Info/InfoBuy";
import InfoImg from "@/atoms/Info/InfoImg";
import InfoName from "@/atoms/Info/InfoName";
import css from "styled-jsx/css"

const style = css`
    .listContainer {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
    }

    div {
        text-align: center;
        margin-top: 10px;
        
    }

    .book {
        /* margin: 10px;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        align-self: center; */
        align-self: center;
        background: transparent;
        padding: 1rem 1rem;
        margin: 0 1rem;
        transition: all 0.5s ease;
        color: #41403e;
        font-size: 1.5rem;
        letter-spacing: 1px;
        outline: none;
        box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, .2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        border: solid 2px #41403e;
    }
`

type Props = {
    data: object;
    isLoading: boolean;
}

const InfoBlock = (props: Props): React.ReactElement => {

    const { data, isLoading } = props

    return (
        <>          
            <div className="listContainer">
                {!isLoading && (
                    data.map((item) => (
                        <div key={item.list_name} className="book">
                            <InfoImg href={item.book_image}  />
                            <InfoName name={item.title} />
                            <InfoAuthor  name={item.author} />
                            <InfoBuy href={item.amazon_product_url}  />
                        </div>
                    ))
                )}
            </div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default InfoBlock;
