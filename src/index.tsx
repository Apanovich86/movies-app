import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ReactQueryProvider} from "./Provider/Provider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ReactQueryProvider>
            <RouterProvider router={router}/>
        </ReactQueryProvider>
    </Provider>
);

