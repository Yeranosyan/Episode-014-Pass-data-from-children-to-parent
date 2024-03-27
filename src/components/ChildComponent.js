import React from "react";
import "../App.css";

const ChildComponent = ({ sendDataToParent }) => {
  // Function to send data to parent component
  const sendData = () => {
    const data = "It's come from child component"; // Data to be sent to parent
    sendDataToParent(data); // Invoke callback function from parent with data
  };

  return (
    <div className="child-frame">
      <h3>Child Component</h3>
      <button className="button" onClick={sendData}>
        Send Data to Parent
      </button>
      {/* Button to trigger data transfer */}
    </div>
  );
};

export default ChildComponent;
