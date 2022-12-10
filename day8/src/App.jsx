import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import de from "../locales/de.json";
import jaJP from "../locales/ja-JP.json";
import { useState } from "react";
import { useEffect } from "react";
import { Trans } from "react-i18next";

const i18nOptions = {
  resources: {
    en: { translation: en },
    de: { translation: de },
    "ja-JP": { translation: jaJP },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      if (format === "nicelongdate") {
        return Intl.DateTimeFormat(lng, { dateStyle: "full" }).format(value);
      }

      return;
    },
  },
};

i18next.use(initReactI18next).init(i18nOptions);

function App() {
  const { t } = useTranslation();
  const locales = ["en", "de", "ja-JP"];
  const [currentLanguage, setCurrentLanguage] = useState(locales[0]);

  function cycleLanguages() {
    const i = locales.indexOf(currentLanguage);
    var nextLng = i == locales.length - 1 ? locales[0] : locales[i + 1];
    setCurrentLanguage(nextLng);
  }

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const christmasDate = new Date("2022/12/25");
  const daysUntilChristmas = Math.ceil(
    (christmasDate - new Date()) / (1000 * 60 * 60 * 24)
  );

  const flags = {
    en: "i-twemoji-flag-united-states",
    de: "i-twemoji-flag-germany",
    "ja-JP": "i-twemoji-flag-japan",
  };

  return (
    <main className="flex flex-col justify-center h-full mx-auto max-w-600px">
      <section className="flex flex-col items-center leading-loose text-center">
        <div className="text-3xl">
          <span className="i-twemoji-christmas-tree" />
          {t("happyHolidays")}
          <span className="i-twemoji-world-map"></span>
        </div>
        <div>
          <Trans i18nKey="christmasIsComing">
            {{ date: christmasDate }} is in
            <span className="font-medium text-green-600">
              {{ time: t("day", { count: daysUntilChristmas }) }}
            </span>
          </Trans>
        </div>
        <div className="flex items-center justify-between w-200px">
          <button
            onClick={cycleLanguages}
            className="text-xl w-32px h-32px rounded-full border-1 border-transparent bg-transparent cursor-pointer duration-300 hover:ring-2 hover:border-green-500 hover:ring-green-500 hover:ring-opacity-40 hover:text-green-600"
          >
            <span className="i-carbon-language" />
          </button>
          <div>
            <span className={flags[currentLanguage]}></span>
            {t("language")}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
