import {useDispatch, useSelector} from "react-redux";

export default function Child() {
    const counter = useSelector(state =>state.counter.value)

    return (
        <div>
            <h1>{counter}</h1>

        </div>
    );
}
