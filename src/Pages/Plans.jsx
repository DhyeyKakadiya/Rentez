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
      { name: 'Standard', monthlyPrice: 199, yearlyPrice: 1999, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/green-dot.png" },
      { name: 'Gold', monthlyPrice: 399, yearlyPrice: 2499, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/green-dot.png" },
      { name: 'Premium', monthlyPrice: 599, yearlyPrice: 2999, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", green: "/src/assets/green-dot.png" },
  ];

  return (
      <div className="pricing-container" id="pricing">
          <div className="pricing-header">
              <h2 className="pricing-title">Here are all our plans</h2>
              <p className="pricing-description">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
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
                      <p className="pricing-package-description">{pkg.description}</p>
                      <p className="pricing-package-price">
                          {isYearly ? `₹${pkg.yearlyPrice}` : `₹${pkg.monthlyPrice}`}<span className="pricing-package-price-unit">/{isYearly ? 'year' : 'month'}</span>
                      </p>

                      <ul className="pricing-package-features">
                      <li className="feature">
                        <FcInfo className="feature-icon" />
                        <span className="feature-text">Videos of Lessons</span>
                      </li>
                        <li className="feature">
                          <FcInfo className="feature-icon"/>
                          <span className="feature-text">Homework check</span>
                        </li>
                        <li className="feature">
                        <FcInfo className="feature-icon"/>
                        <span className="feature-text">Videos of Lessons</span>
                        </li>
                        <li className="feature">
                        <FcInfo className="feature-icon"/>
                        <span className="feature-text">Monthly conferences </span>
                        </li>
                        <li className="feature">
                        <FcInfo className="feature-icon"/>
                          <span className="feature-text">Personal advice</span>
                        </li>
                      </ul>


                      <div className="pricing-package-button">
                          <button onClick={() => handleBuyCourse(199, 'Standard')} className="pricing-package-button-primary">Get Started</button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Plans;