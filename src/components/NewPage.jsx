import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import useModvarStore from "../hooks/useModvarStore";
import MessageUpdater from "./MessageUpdater";

const NewPage = (props) => {
  const message = useModvarStore((state) => state["message"]);

  return (
    <Box
      sx={{
        margin: 1,
      }}
    >
      <Typography>This is the new page.</Typography>

      <Typography>{message ?? "There is no message"}</Typography>

      <MessageUpdater />

      <Button
        variant="contained"
        sx={{
          display: "block",
          marginTop: 1,
          marginBottom: 1,
        }}
        onClick={() => {
          props.onReturnToHomePage?.();
        }}
      >
        Return to Home Page
      </Button>
    </Box>
  );
};

NewPage.propTypes = {
  onReturnToHomePage: PropTypes.func,
};

export default NewPage;
