import React from "react";

const Notification = () => {
  return (
    <div className="toast">
      <div className="alert alert-info">
        <span>New message arrived.</span>
      </div>
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>
  );
};

export default Notification;
