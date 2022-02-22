import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useWeb3Context } from "./hooks/web3Context";

import { Box } from "@mui/material";
import styled from "styled-components";
import TopBar from "./components/TopBar/TopBar";
import Migrate from "./pages/Migrate";
import ComingSoon from "./pages/ComingSoon";
import Footer from "./components/Footer";
import ConnectModal from "./components/ConnectModal";

import "./App.css";
import Notification from "./components/Notification";
import useAuth from "./hooks/useAuth";

function App() {
  const { connect, hasCachedProvider } = useWeb3Context();

  const [notification, setNotification] = useState(null);
  const [hamburgeropen, setHamburgerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const { login, logout } = useAuth();

  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then((msg) => {
        if (msg.type === "error") {
          setNotification(msg);
        }
      });
    } else {
      // then user DOES NOT have a wallet
    }
    // We want to ensure that we are storing the UTM parameters for later, even if the user follows links
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ConnectModal
        login={login}
        open={open}
        setOpen={setOpen}
        account={account}
        setAccount={setAccount}
        provider={provider}
        setProvider={setProvider}
      />
      <TopBar
        setNotification={setNotification}
        hamburgeropen={hamburgeropen}
        setHamburgerOpen={setHamburgerOpen}
        open={open}
        setOpen={setOpen}
      />
      <Box position="relative">
        <Vector display={hamburgeropen ? "block" : "none"} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/migrate" />} />
          <Route path="/home" element={<ComingSoon />} />
          <Route path="/staking" element={<ComingSoon />} />
          <Route path="/farming" element={<ComingSoon />} />
          <Route
            exact
            path="/migrate"
            element={<Migrate setNotification={setNotification} />}
          />
        </Routes>
        <Footer />
      </Box>
      <Notification data={notification} />
    </BrowserRouter>
  );
}

const Vector = styled(Box)`
  background: rgba(20, 11, 51, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 163px;
  left: 0;
  z-index: 100;
`;

export default App;
