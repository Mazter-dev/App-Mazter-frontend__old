import React from "react";
import Master from "./layouts/Master";
const MySuscription = () => {
  return (
    <Master>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Title</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h1>Content</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Master>
  );
};
export default MySuscription;
