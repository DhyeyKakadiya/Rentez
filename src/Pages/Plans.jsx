import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import { buyCourse } from "../services/operations/paymentAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();

  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);

  const handleBuyCourse = (plan, planType) => {
    if (token) {
      buyCourse(token, plan, planType, user, navigate)
      return
    }
  }

  const packages = [
      { name: 'Standard', 
        monthlyPrice: 199, 
        yearlyPrice: 1999, 
        description: "Get Startes with our Standard Plan journey.",
        btn_name:"Go Standard",
      },
      { name: 'Gold',
        monthlyPrice: 399, 
        yearlyPrice: 2499, 
        description: "Get Startes with our Gold Plan journey.",
        btn_name:"Go Gold",
      },
      { name: 'Premium',
        monthlyPrice: 599, 
        yearlyPrice: 2999, 
        description: "Get Startes with our Premium Plan journey.",
        btn_name:"Go Premium",
      },
  ];

  return (
      <div className="pricing-container" id="pricing">
          <div className="pricing-header">
              <h2 className="pricing-title">Unlock wide range of Listings</h2>
              <p className="pricing-description">Explore our trio of plans, each offering a distinct set of advantages to suit your individual preferences.</p>
              <p className="pricing-description" style={{marginTop:"1rem"}}>(All Plans FREE for first 30days)</p>
              <div className="pricing-toggle">
                  <label htmlFor="toggle" className="pricing-toggle-label">
                      <span className="pricing-toggle-monthly">Monthly</span>
                      {/* toggle button */}
                      <div className="pricing-toggle-switch">
                          <div className={`pricing-toggle-switch-handle ${isYearly ? 'pricing-toggle-switch-handle-yearly' : 'pricing-toggle-switch-handle-monthly'}`}></div>
                      </div>
                      <span className="pricing-toggle-yearly">Yearly</span>
                  </label>
                  <input
                      type="checkbox"
                      id="toggle"
                      className="hidden"
                      checked={isYearly}
                      onChange={() => setIsYearly(!isYearly)}
                  />
              </div>
          </div>
          <div className="pricing-grid">
              {packages.map((pkg, index) => (
                  <div key={index} className="pricing-package">
                      <h3 className="pricing-package-name">{pkg.name}</h3>
                      <p className="pricing-package-price">
                          {isYearly ? `₹${pkg.yearlyPrice}` : `₹${pkg.monthlyPrice}`}<span className="pricing-package-price-unit">/{isYearly ? 'year' : 'month'}</span>
                      </p>
                      <p className="pricing-package-description">{pkg.description}</p>
                      

                      <ul className="pricing-package-features">
                        <li className="feature">
                          <FcInfo className="feature-icon" />
                          <span className="feature-text">Visual Property Showcase</span>
                        </li>
                        <li className="feature">
                          <FcInfo className="feature-icon"/>
                          <span className="feature-text">Quality Inspection</span>
                        </li>
                        <li className="feature">
                          <FcInfo className="feature-icon"/>
                          <span className="feature-text">Flexible Leasing</span>
                        </li>
                        <li className="feature">
                          <FcInfo className="feature-icon"/>
                          <span className="feature-text">Regular Maintenance</span>
                        </li>
                        <li className="feature">
                          <FcInfo className="feature-icon"/>
                          <span className="feature-text">Personalized Support</span>
                        </li>
                      </ul>

                      <div className="pricing-package-button">
                        <button
                         onClick={() => handleBuyCourse(isYearly ? pkg.yearlyPrice : pkg.monthlyPrice, pkg.name)}
                          className="pricing-package-button-primary"
                          >
                            {pkg.btn_name}
                        </button>
                      </div>

                  </div>
              ))}
          </div>
      </div>
  );
};

export default Plans;