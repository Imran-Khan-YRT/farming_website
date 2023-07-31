import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import data from "../../assets/combined/en/translation.json";
import useDynamicTranslation from "../../utils/customHook/dynamicTranslation";
import PageContainer from "../commonComponent/PageContainer/PageContainer";

export default function HorizontalLinearAlternativeLabelStepper() {
  const stepperData = data.microfinance.apply_for_loan.step;
  const t = useDynamicTranslation();
  return (
    <>
      <PageContainer title={t("microfinance.apply_for_loan.title")} backgroundColor="#F3F3F3">
        <Stepper alternativeLabel style={{ padding: "3rem" }}>
          {stepperData.map((label, index) => (
            <Step active>
              <StepLabel>
                <p>{t(`microfinance.apply_for_loan.step.${index}.title`)}</p>
                <Typography variant="h6" style={{ textAlign: "center", backgroundColor: "white", marginTop: "2rem", padding: ".7rem", borderRadius: "5px" }}>
                  {t(`microfinance.apply_for_loan.step.${index}.description`)}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </PageContainer>
    </>
  );
}
