import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import "../App.css";

const ParentComponent = () => {
  const [childData, setChildData] = useState(null); // State to hold data from child component

  // Callback function to receive data from child component
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div className="container">
      <div className="parent-frame">
        <h2>Parent Component</h2>
        {childData && ( // Display data from child component if available
          <div>
            <h3 className="text-children">Data from Child:</h3>
            <p>{childData}</p>
          </div>
        )}
      </div>
      <ChildComponent sendDataToParent={handleChildData} />
      {/* Child component with callback function prop */}
    </div>
  );
};

export default ParentComponent;
