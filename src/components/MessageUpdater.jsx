import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import useModvarStore from "../hooks/useModvarStore";

const MessageUpdater = (props) => {
  const setModvar = useModvarStore((state) => state.setModvar);

  const [message, setMessage] = useState("");

  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <TextField
        label="Message"
        placeholder="Specify a message"
        value={message}
        sx={{
          display: "block",
          marginTop: 1,
          marginBottom: 1,
        }}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <Button
        variant="contained"
        sx={{
          display: "block",
        }}
        onClick={() => {
          setModvar("message", message);
        }}
      >
        Update
      </Button>
    </Box>
  );
};

export default MessageUpdater;
