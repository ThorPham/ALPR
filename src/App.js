import Home from "./pages/Home";
import Upload from "./pages/Upload"
import NotFound from "./pages/NotFound"

import { BrowserRouter, Routes, Route ,HashRouter} from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
     <Routes>
        <Route path="/"  element={<Home />}/>
          
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
