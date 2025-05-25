// import "./styles.css";
import img from "../Assets/wedding3.jpeg";
// import { ReactComponent as LeftQuote } from "./assets/svgs/quote-left-solid.svg";
import "../Header/CardSlider.css";
export default function CardSlider() {
  return (
    <div className="CardSlider11">
                <h2>Our Success Story Couple </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="testimonialContainer">
          <div className="testimonialHeader">
            <div className="imageContainer">
              <img
                width="100%"
                height="100%"
                style={{ borderRadius: "70%" }}
                src={img}
                alt="krittibas"
              />
            </div>
            <div className="nameContainer">
              <h4>Amrita Goswami</h4>
              <p>Baby Carer</p>
            </div>
            <div className="iconContainer">
              {/* <LeftQuote style={{ fill: "grey" }} className="icon" /> */}
            </div>
          </div>
          <div className="testimonialBody">
            <p className="testimonialBodyText">
              "I am really grateful to BlueHelmet for finding a baby carer for
              my child. Happy with the woman who was given to me. The BlueHelmet
              team was extremely cooperative. It is a great portal for working
              parents like us who can easily search and find any kind of
              domestic help."
            </p>
          </div>
        </div>

        <div className="testimonialContainer">
          <div className="testimonialHeader">
            <div className="imageContainer">
              <img
                width="100%"
                height="100%"
                style={{ borderRadius: "50%" }}
                src={img}
                alt="krittibas"
              />
            </div>
            <div className="nameContainer">
              <h4>Mohan Mathur</h4>
              <p>Baby Carer</p>
            </div>
            <div style={{}} className="iconContainer">
              {/* <LeftQuote style={{ fill: "#796088" }} className="icon" /> */}
            </div>
          </div>
          <div className="testimonialBody">
            <p className="testimonialBodyText">
              “Thank You BlueHelmet for helping me find a baby carer for my
              little one. I am extremely happy with the lady who was chosen to
              look after my baby. The BlueHelmet team was very helpful. ”
            </p>
          </div>
        </div>

        <div className="testimonialContainer">
          <div className="testimonialHeader">
            <div className="imageContainer">
              <img
                width="100%"
                height="100%"
                style={{ borderRadius: "50%" }}
                src={img}
                alt="krittibas"
              />
            </div>
            <div className="nameContainer">
              <h4>Sourav Vashisht</h4>
              <p>Chef, Maid</p>
              <p>House Maid</p>
            </div>
            <div className="iconContainer">
              {/* <LeftQuote className="icon" /> */}
            </div>
          </div>
          <div className="testimonialBody">
            <p className="testimonialBodyText">
              “I hired a Chef, Maid (24hrs), House Manager and Helper through
              BlueHelmet. They provided experienced and fully vaccinated
              candidates for the role. I found the platform pretty user friendly
              and their support team quite patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
