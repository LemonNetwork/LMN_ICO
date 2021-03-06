import React from "react";

//images
// import PartnerA from '../../../assets/images-main/partners/a-xs.png'
import PartnerA from "../../../assets/images-main/partners/2c.png";
import PartnerB from "../../../assets/images-main/partners/b-xs.png";
import PartnerC from "../../../assets/images-main/partners/c-xs.png";
import PartnerD from "../../../assets/images-main/partners/d-xs.png";
import PartnerE from "../../../assets/images-main/partners/e-xs.png";

const ExternalPartners = () => {
  return (
    <div className="container">
      <div className="nk-block block-partners">
        <div className="section-head section-head-xs">
          <h6
            className="title title-xs text-center animated"
            data-animate="fadeInUp"
            data-delay=".1"
          >
            Future Listing
          </h6>
        </div>
        <ul className="partner-list flex-lg-nowrap  d-flex align-items-center justify-content-center">
          {/* <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".2"
            style={{ marginRight: "0" }}
          >
            <img src={PartnerA} alt="partner" />
          </li> */}
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".25"
            style={{ marginRight: "0" }}
          >
            <a href="https://www.coingecko.com/en" target="_blank">
              <img src={PartnerB} alt="partner" />
            </a>
          </li>

          {/* <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".35"
            style={{ marginRight: "0" }}
          >
            <img src={PartnerD} alt="partner" />
          </li> */}
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".4"
            style={{ marginRight: "0" }}
          >
            <a href="https://www.kucoin.com/" target="_blank">
              <img src={PartnerE} alt="partner" />
            </a>
          </li>
          <li
            className="partner-logo-s3 animated"
            data-animate="fadeInUp"
            data-delay=".3"
            style={{ marginRight: "0" }}
          >
            <a href="https://coinmarketcap.com/" target="_blank">
              <img src={PartnerC} alt="partner" />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExternalPartners;
