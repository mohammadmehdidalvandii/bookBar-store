import Home from "./page/Home/Home";
import Store from "./page/Store/Store";
import { Route } from "./utils/type";


const routes:Route[] = [
    {path:"/" , element:<Home/>},
    {path:"/Store" , element:<Store/>},
];

export default routes