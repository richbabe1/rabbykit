import { addMessages, init } from "svelte-i18n";

import en from "../locales/en/translation.json";
import zh_CN from "../locales/zh_CN/translation.json";

export const SUPPORT_LANGUAGES = ["en", "zh_CN"] as const;

export type SUPPORT_LANGUAGES = (typeof SUPPORT_LANGUAGES)[number];

addMessages("en", en);
addMessages("zh_CN", zh_CN);

init({
  fallbackLocale: "en",
});
