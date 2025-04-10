import React from "react";

// Component Biểu tượng
const Icon = ({ icon: IconComponent }) => {
  if (!IconComponent) return null;
  return <IconComponent className="text-xl" />;
};

export default Icon;