import { useEffect, useState } from "react";
import i18n from "../../i18n";

// Custom hook to load translations dynamically using suspense
function useDynamicTranslation() {
  const [t, setT] = useState(() => i18n.t);

  useEffect(() => {
    const loadTranslations = async (lang: string) => {
      try {
        const { default: translation } = await import(`../../assets/combined/${lang}/translation.json`);
        i18n.addResourceBundle(lang, "translation", translation, true, true);
        setT(() => i18n.getFixedT(lang, "translation"));
      } catch (error) {
        console.error("Error loading translations:", error);
      }
    };

    loadTranslations(i18n.language);

    // Listen for language changes and reload translations accordingly
    const handleLanguageChange = (lang: string) => {
      loadTranslations(lang);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Clean up the event listener
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return t;
}

export default useDynamicTranslation;
