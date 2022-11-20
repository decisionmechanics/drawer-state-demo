import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import { fetchCountries } from "../api";

const Countries = (props) => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Box>
      {countries ? (
        <ul>
          {countries.map(({ ISO_Numeric, Country }) => (
            <Typography key={ISO_Numeric} component="li">
              {Country}
            </Typography>
          ))}
        </ul>
      ) : (
        <Typography>Loading...</Typography>
      )}

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

Countries.propTypes = {
  onReturnToHomePage: PropTypes.func,
};

export default Countries;
