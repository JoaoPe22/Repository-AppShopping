import Main from "./components/Main";
import Footer from "./components/Footer";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
}
