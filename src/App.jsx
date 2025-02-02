import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

import LoadingSpinner from "./components/LoadingSpinner";

const Countries = lazy(() => import("./pages/Countries"));
const Country = lazy(() => import("./pages/Country"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 120000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/:id" element={<Country />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
