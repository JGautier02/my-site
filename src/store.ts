import { writable } from "svelte/store";

import data from "./lib/data/eng.json"

export const langTable = writable(data);
export const currentLang = writable("English");