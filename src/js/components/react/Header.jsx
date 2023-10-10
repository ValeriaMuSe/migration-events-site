import React from "react";
import { Link } from "react-router-dom";
import { homeTabs } from "../../config";

const Header = ({ handleTabChange, isAccount }) => {
  const renderLinks = isAccount ? (
    <Link to="/" id="back-events" className="header__link">
      {"< Back to events"}
    </Link>
  ) : (
    <Link to="/account" id="my-account" className="header__link">
      {"My account >"}
    </Link>
  );

  return (
    <header id="header" className="header">
      <div id="tabs" className="header__tabs">
        {renderLinks}

        {homeTabs.map((tab) => (
          <button
            data-category={tab.category}
            key={tab.category}
            onClick={handleTabChange}
            className={
              tab.category === isAccount
                ? "header__tab active"
                : "header__tab"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export { Header };
