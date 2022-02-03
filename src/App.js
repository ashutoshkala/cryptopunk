import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import PunkList from "./components/PunkList";
import axios from "axios";
import Main from "./components/Main"
import savedData from './assets/data/data.json'

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  const selectPunkHandler = (id) => {
    setSelectedPunk(id);
  };

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x2E2856A38939fd2Cc066dc417097Bd3c40417Df0"
      );
      setPunkListData(openSeaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
        <>
          <Main punkListData={savedData} selectedPunk={selectedPunk} />
          <PunkList punkListData={savedData} selectPunk={selectPunkHandler} />
        </>
    </div>
  );
}

export default App;