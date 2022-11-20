import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";

const Content = (props) => (
  <Box
    sx={{
      width: 400,
      margin: 1,
    }}
  >
    <TextField
      label="Message"
      placeholder="Specify a message"
      value={props.message}
      onChange={(e) => {
        props.onMessageChange?.(e.target.value);
      }}
    />
  </Box>
);

Content.propTypes = {
  message: PropTypes.string,
  onMessageChange: PropTypes.func,
};

Content.defaultProps = {
  message: "",
};

export default Content;
