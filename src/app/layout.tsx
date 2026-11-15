import type { Metadata, Viewport } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/aref-ruqaa/400.css";
import "@fontsource/aref-ruqaa/700.css";
import "./globals.css";

const title = "UChicago ASA — Arab Student Association";
const description = "Arab culture, Chicago chapter. Get to know the University of Chicago Arab Student Association, explore our community, and find your next invitation.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "UChicago ASA", type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#f6f0e4" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
