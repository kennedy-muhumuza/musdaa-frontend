import React, { Fragment } from "react";

// import GetStaffTokens from "../../components/UI/GetStaffTokens/GetStaffTokens";
import styles from "./AdminDashBoard.module.scss";

const AdminDashBoard = () => {
  return (
    <Fragment>
      <div className={styles["admin__dashboard__container"]}>
        {/* <GetStaffTokens /> */}
        <p>Hey there, welcome to the Admin Dashboard</p>
      </div>
    </Fragment>
  );
};

export default AdminDashBoard;
