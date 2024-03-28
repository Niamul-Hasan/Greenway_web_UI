import { RouterProvider } from "react-router-dom"
import router from "./Components/Routes/Routes"
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </HelmetProvider>
  )
}

export default App