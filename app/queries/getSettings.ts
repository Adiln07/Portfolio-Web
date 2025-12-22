import { Setting } from "../types/Setting";

export async function getSetting(): Promise<Setting> {
  const data = await fetch("http://localhost:3001/settings");
  const setting = await data.json();
  return setting;
}
