import Coment from "./coment/coment";

export default function Coments({items}){

    return(
        <div>
            {

                items.map((value) => <Coment key={value.id} item={value} />)

            }


        </div>
    );
}