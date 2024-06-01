/** @format */

import enLocale from "./en";

const messages = {
    en: {
        ...enLocale,
    },
};

export default defineI18nConfig(() => {
    return {legacy: false, locale: "en", messages};
});
