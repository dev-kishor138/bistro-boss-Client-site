import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { HelmetProvider } from "react-helmet-async"
import "./App.css"
import AuthProvider from "./Provider/AuthProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {


  return (
    <>
      <div className="">
        <AuthProvider>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </HelmetProvider>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
