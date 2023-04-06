import React from "react";

const NotFound = ({ setNavBar }) => {

  React.useEffect(() => {
    setNavBar([0, 0]);
  }, []);

  return <h2 className="text-2xl font-bold">Not Found</h2>;
};

export default NotFound;