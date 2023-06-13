// // import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// import Navbar from "./Components/Navbar";
// import PropTypes from "prop-types";
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload.{" "}
//         </p>{" "}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with shravan{" "}
//         </a>{" "}
//       </header>{" "} */}

//       <Navbar
//         title="TextUtils"
//         // mode={mode}
//         // toggleMode={toggleMode}
//         // key={new Date()}
//       />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
// import React, { useState } from "react";
// import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("Dark mode has been enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };
//   return (
//     <>
//       <Router>
//         <Navbar
//           title="TextUtils"
//           mode={mode}
//           toggleMode={toggleMode}
//           key={new Date()}
//         />
//         <Alert alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             {/* /users --> Component 1
//         /users/home --> Component 2 */}
//             <Route path="/about" element={<About />} />
//             {/* <Route exact path="/textform" component={TextForm} /> */}
//             <Route
//               exact
//               path="/"
//               render={() => (
//                 <TextForm
//                   showAlert={showAlert}
//                   heading="Try TextUtils - word counter, character counter, remove extra spaces"
//                   mode={mode}
//                 />
//               )}
//             />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
