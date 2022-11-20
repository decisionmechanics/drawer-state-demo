import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Drawer, Typography } from "@mui/material";
import useModvarStore from "../hooks/useModvarStore";
import Sidebar from "./Sidebar/Sidebar";

const Home = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const greeting = useModvarStore((state) => state.greeting);
  const message = useModvarStore((state) => state.message);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > .MuiButton-root:not(:first-of-type)": {
            marginLeft: 1,
          },
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setDrawerOpen(true);
          }}
        >
          Open Drawer
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            props.onShowNewPage?.();
          }}
        >
          Open New Page
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#333",
          }}
          onClick={() => {
            props.onShowCountries?.();
          }}
        >
          Open Countries
        </Button>
      </Box>

      <Typography
        sx={{
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        {greeting}
      </Typography>

      <Typography
        sx={{
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        {message ?? "There is no message"}
      </Typography>

      <Drawer open={drawerOpen}>
        <Sidebar
          onClose={() => {
            setDrawerOpen(false);
          }}
        />
      </Drawer>
    </>
  );
};

Home.propTypes = {
  onShowNewPage: PropTypes.func,
  onShowCountries: PropTypes.func,
};

export default Home;
