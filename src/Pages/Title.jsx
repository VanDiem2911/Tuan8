import React from "react";

// Component Tiêu đề
const Title = ({ icon: Icon, title }) => {
  return (
    <div className="flex items-center mb-4">
      <Icon className="text-2xl text-pink-500 mr-2" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default Title;