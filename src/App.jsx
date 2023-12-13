import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashbaord from "./pages/Dashbaord";
import DashOverview from "./pages/DashOverview";
import Community from "./pages/Community";
import Invest from "./pages/Invest";
import Save from "./pages/Save";
import ThriftSave from "./pages/ThriftSave";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Agreement from "./pages/Agreement";
import CommunityRules from "./pages/CommunityRules";
import JoinedCommunity from "./pages/JoinedCommunity";
import NewThriftForm from "./components/NewThriftForm";
import ConfirmThrift from "./pages/ConfirmThrift";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route exact path="/dashboard" element={<Dashbaord />}>
          <Route index="true" element={<DashOverview />} />
          <Route path="/dashboard/community" element={<Community />} />
          <Route
            path="/dashboard/community-rules"
            element={<CommunityRules />}
          />
          <Route
            path="/dashboard/joined-communities"
            element={<JoinedCommunity />}
          />
          <Route path="/dashboard/invest" element={<Invest />} />
          <Route path="/dashboard/save" element={<Save />} />
          <Route path="/dashboard/save-thrift" element={<ThriftSave />} />
          <Route path="/dashboard/new-thrift" element={<NewThriftForm />} />
          <Route path="/dashboard/confirm-thrift" element={<ConfirmThrift />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
