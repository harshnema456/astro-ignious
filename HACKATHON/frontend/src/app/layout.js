import "./globals.css";

export const metadata = {
  title: "PeaceHub - Your Mental Wellness Journey",
  description: "Discover the support, tools, and community you need to feel better, every day. PeaceHub offers AI chat support, journaling, insights, and coping tools for your mental wellness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
