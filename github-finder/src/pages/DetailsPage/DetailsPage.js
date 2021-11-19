import React from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import LogoButton from "../../components/LogoButton/LogoButton";
import { Box } from "@material-ui/core";
import { useStyles } from "../../styles/pages/DetailsPage";

const DetailsPage = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <LogoButton />
      <DetailCard />
    </Box>
  );
};

export default DetailsPage;
