import React from "react";
import { DateComponent } from "../../utils/Date";

import "./styles.css";

function DashboardHeader() {
  return (
    <div className="dashbord-header">
      <div className="dashbord-header-left">
     
      </div>
      <div className="dashbord-header-right">
        <img
          className="dashbord-header-avatar"
          src="https://reqres.in/img/faces/9-image.jpg"
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
