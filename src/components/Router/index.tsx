import * from 'react';
import {Route,Switch} from 'react-router-dom';

import  utils  from "src/utils/utils";
const Router=()=>{
    const UserLayout=utils.getRoute('/user').component;
    return(
        <Switch>
            <Route path="/user" render={(props:any)=><UserLayout {...props}/>} />
        </Switch>
    );
}
export default Router;