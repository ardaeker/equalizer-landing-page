import "@/assets/styles/tailwind.css";

import { sans } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Equalizer Landing Page - Frontend Mentor",
  description:
    "This project is a solution to the Equalizer Landing Page challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
