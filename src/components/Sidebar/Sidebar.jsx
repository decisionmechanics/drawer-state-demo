import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Content from "./Content";
import Toolbar from "./Toolbar";
import useModvarStore from "../../hooks/useModvarStore";

const Sidebar = (props) => {
  const storedMessage = useModvarStore((state) => state.message);
  const setModvar = useModvarStore((state) => state.setModvar);

  const [message, setMessage] = useState(storedMessage);

  const handleApply = () => {
    setModvar("message", message);

    props.onClose?.();
  };

  return (
    <Box>
      <Toolbar onApply={handleApply} onClose={props.onClose} />
      <Content message={message} onMessageChange={setMessage} />
    </Box>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
};

export default Sidebar;
