import { useState } from "react";
import Countries from "./components/Countries";
import Home from "./components/Home";
import NewPage from "./components/NewPage";

const App = () => {
  const [page, setPage] = useState("home");

  switch (page) {
    case "new": {
      return (
        <NewPage
          onReturnToHomePage={() => {
            setPage("home");
          }}
        />
      );
    }

    case "countries": {
      return (
        <Countries
          onReturnToHomePage={() => {
            setPage("home");
          }}
        />
      );
    }

    default: {
      return (
        <Home
          onShowNewPage={() => {
            setPage("new");
          }}
          onShowCountries={() => {
            setPage("countries");
          }}
        />
      );
    }
  }
};

export default App;
