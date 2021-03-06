import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <il>+</il>
            <il>
              <FaPizzaSlice />
            </il>
          </ul>
        </div>
      </nav>
    </header>
  );
};
