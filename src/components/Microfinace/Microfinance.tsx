import React from "react";
import FlexContainer from "../commonComponent/FlexContainer/FlexContainer";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import data from "../../assets/combined/en/translation.json";
import HorizontalLinearAlternativeLabelStepper from "./Stepper";
import PageContainer from "../commonComponent/PageContainer/PageContainer";

const Microfinance = () => {
  const t = useDynamicTranslation();
  const microFinanceDataProcess = Object.keys(data.microfinance.process_to_microfinance);
  return (
    <>
      <Box sx={{ backgroundColor: "#F9F9F9", paddingBottom: "20px" }}>
        <PageContainer title={t(`microfinance.title`)} margin="0" backgroundColor="inherit">
          <List>
            {microFinanceDataProcess.map((data, index) => (
              <ListItem>
                <Typography variant="h4">{`${index + 1}.` + t(`microfinance.process_to_microfinance.${data}`)}</Typography>{" "}
              </ListItem>
            ))}
          </List>
        </PageContainer>
        <HorizontalLinearAlternativeLabelStepper />
      </Box>
    </>
  );
};

export default Microfinance;
