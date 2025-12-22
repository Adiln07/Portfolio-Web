import { getSetting } from "../queries/getSettings";

export async function Footer() {
  const getSettingData = await getSetting();

  return (
    <footer className="border-t border-black py-4 text-center mt-24">
      <p>© 2025 Copyright. {getSettingData.siteName }.</p>
    </footer>
  );
}
