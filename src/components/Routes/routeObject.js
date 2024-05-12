import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';

export const routeObject = [
    {id: 1, path: 'page1', element: <Page1/>, icon: <FirstPageRoundedIcon/>},
    {id: 2, path: 'page2', element: <Page2/>, icon: <FirstPageRoundedIcon/>},
    {id: 3, path: 'page3', element: <Page3/>, icon: <FirstPageRoundedIcon/>},
]