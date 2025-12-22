import Link from "next/link";
import { Nav } from "./Nav";
import { getSetting } from "../queries/getSettings";

export async function Header() {
  const getSettingData = await getSetting();

  return (
    <header className="border-b border-black py-1">
      <h1 className="text-center py-2 font-semibold text-2xl kanit-font">
        {getSettingData.siteName}
      </h1>
      <Nav />
    </header>
  );
}
