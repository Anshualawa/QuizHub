import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// const fetchData = async () => {
//   try {
//     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//     const baseUrl =
//       "https://script.google.com/macros/s/AKfycbx1cMOYnV9m4Ktg_52rbL5JKk1BUN37EhCOqlXywvmmQ7Z6UcyNF4zjW6fpglRWVupBVg/exec";

//     const response = await fetch(`${proxyUrl}${baseUrl}`);
//     const data = await response.json();
//     setMcq(data.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
