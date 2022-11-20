import PropTypes from "prop-types";
import { Box, Button, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const Toolbar = (props) => (
  <Box
    sx={{
      display: "flex",
      margin: 1,
      "& > *:last-child": {
        marginLeft: "auto",
      },
    }}
  >
    <IconButton
      onClick={() => {
        props.onClose?.();
      }}
    >
      <CloseIcon />
    </IconButton>
    <Button
      variant="contained"
      onClick={() => {
        props.onApply?.();
      }}
    >
      Apply
    </Button>
  </Box>
);

Toolbar.propTypes = {
  onApply: PropTypes.func,
  onClose: PropTypes.func,
};

export default Toolbar;
