// get the language from context while importing data  and modify
import data from "../../assets/combined/en/translation.json";

// be careful about the serial while modifying data in translation.json
export const headerData = Object.keys(data.navbar.menu).map((value) => `navbar.menu.${value}`);
export const downloadBtn = "navbar.button.downloadSignUp";
