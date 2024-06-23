import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "./App.css";

import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div style={{ display: "flex" }}>
          <Navigation />
          <Outlet />
          {children}
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
