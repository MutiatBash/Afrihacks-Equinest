import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashbaord from "./pages/Dashbaord";
import DashOverview from "./pages/DashOverview";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashbaord />}>
          <Route index="true" element={<DashOverview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
