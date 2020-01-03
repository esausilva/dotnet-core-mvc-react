// Option 1 -----------------

//import React from "react";

// const NotFound = () => (
//   <h1 style={{ textAlign: "center" }}>
//     Sorry! The resource you are looking for has not been found
//   </h1>
// );

// export { NotFound };

// Option 2 -----------------

const NotFound = () => {
  window.location = "/Home/NotFoundPage";
  return null;
};

export { NotFound };
