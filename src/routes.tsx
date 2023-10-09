import {createHashRouter} from "react-router-dom";

import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import Favorites from './pages/Favorites.tsx'

export const routes = createHashRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '',
                    element: <Homepage/>
                },
                {
                    path: 'favorites',
                    element: <Favorites/>
                }
            ]
        }
    ]
)