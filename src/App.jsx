import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AmoCrmBitrix24 from "./pages/services/AmoCrmBitrix24";
import Roistat from "./pages/services/Roistat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/amocrm-bitrix24" element={<AmoCrmBitrix24 />} />
      <Route path="/services/roistat" element={<Roistat />} />
    </Routes>
  );
};

export default App;
