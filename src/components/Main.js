import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

export default function Main({ selectedPunk, punkListData }) {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  console.log(punkListData);
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="rightDetails">
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name}</div>
            <span className="itemNumber"> •#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="owner-img" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">0x5A5bc0535D8c6Db18aEe95Ae4a07088237d918c3</div>
                <div className="ownerHandle">
                  @ashutosh_kala
                </div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

