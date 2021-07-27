import {useEffect, useState} from "react";
import {getUserDetails} from "../../../servises/API";

export default function UsersDetails({id}) {

    let [userDetails, setUsersDetails] = useState(null);



    useEffect(()=>{
        getUserDetails(id).then(value => setUsersDetails(value.data))

    },[id])

    return (
        <>
            { userDetails && <div>
                {userDetails.id} {userDetails.username} {userDetails.email}
            </div>}

        </>
    );
}