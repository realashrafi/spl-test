import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import Page1Fragment from "../pages/Page1Fragment";
import Page2Fragment from "../pages/Page2Fragment";
import Page3Fragment from "../pages/Page3Fragment";



export const routeObject = [
    {id: 1, path: 'page1', element: <Page1 fragment={<Page1Fragment/>}/>, icon: <FirstPageRoundedIcon/>},
    {id: 2, path: 'page2', element: <Page2 fragment={<Page2Fragment/>}/>, icon: <FirstPageRoundedIcon/>},
    {id: 3, path: 'page3', element: <Page3 fragment={<Page3Fragment/>}/>, icon: <FirstPageRoundedIcon/>},
]