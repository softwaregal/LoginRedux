export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../LoginCredetials.json';

export function getData(){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.login_credentials;
            console.log("Action",data);
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}
