
export default function Menu(props){

    let {pages} = props;
    return(
        <ul>
            pages.map(page => <li>{pages}</li>)
        </ul>
    );
}