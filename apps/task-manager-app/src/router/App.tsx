import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Home } from "../components/pages/Home";
import { Layout } from "../layouts/Layout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Pages */}
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
