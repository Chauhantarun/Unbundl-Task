import React from "react";
import "./DreamSmiles.css";
import { CheckCircle } from "lucide-react";

const DreamSmiles = () => {
  return (
    <section className="dream-smiles">
      <div className="dream-container">
        {/* Left Content */}
        <div className="dream-content">
          <h2>
            Dream smiles
            <br />
            achieved secretly
          </h2>

          <p>
            Experience the superior quality of our Whistle Aligners crafted with
            3-layer PU material. With 450+ clinics nationwide, enjoy
            comfortable treatment by expert orthodontists at House of Clove.
          </p>

          <p>
            The pricing is different for every case. Cases with higher
            complexity requiring more aligners and additional time and effort
            from our dentists.
          </p>
        </div>

        {/* Right Card */}
        <div className="aligner-card">
          <div className="card-content">
            <div className="card-left">
              <h3>Whistle Aligners</h3>

              <div className="price-area">
                <span className="old-price">₹84,000</span>

                <div className="new-price-row">
                  <span>starting at</span>
                  <strong>₹47,999</strong>
                </div>

                <small>inc. of all taxes</small>
              </div>

              <ul>
                <li>
                  <CheckCircle size={16} />
                  Offer valid for a limited time
                </li>

                <li>
                  <CheckCircle size={16} />
                  Easy financing options
                </li>
              </ul>
            </div>

            <div className="card-image">
              <img
                src="/img/3.png"
                alt="Whistle Aligners"
              />
               <a href="/" className="learn-more">
            Learn more
            <span>→</span>
          </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default DreamSmiles;