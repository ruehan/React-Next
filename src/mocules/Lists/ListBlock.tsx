
import ListHeader from "@/atoms/Lists/ListHeader";
import ListType from "@/atoms/Lists/ListType";
import css from "styled-jsx/css"

const style = css`
    .listContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: left;
    }

    .book {
        height: 50px;
        border: solid 2px #41403e;
        margin: 10px;
        font-family: 'Fredericka the Great', cursive;
        font-size: 25px;
        text-align: center;
        line-height: 50px;
        background-color: white;

        padding: 1rem 1rem;
        transition: all 0.5s ease;
        color: #41403e;
        letter-spacing: 1px;
        outline: none;
        box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, .2);
        border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        
    }

    .book:hover {
            transform: scale(1.2);     
            z-index: 5;
        }
`

type Props = {
    data: object;
    header: string;
}

const ListBlock = (props: Props): React.ReactElement => {

    const { data, header } = props

    return (
        <>          
            <ListHeader header={header} />
            <div className="listContainer">
                {data.map((item) => (
                    <div key={item.list_name} className="book">
                        <ListType href={`/list/${item.list_name}`} name = {item.list_name} />
                    </div>
                ))}
            </div>
            <style jsx>{style}</style>
        </>
        
    )
}

export default ListBlock;
