import logo from "./resources/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import Home from "./views/Home";
import EnterContest from "./views/EnterContest";

function App() {
  return (
    <Box style={{ background: "blackAlpha.50", minHeight: "100vh" }}>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route path="/enterContest" Component={EnterContest}></Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
