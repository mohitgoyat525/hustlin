import "./globals.css";



export const metadata = {
  title: "Hustlin",
  description: "THE HUSTLIN’ HARDOS.",
  openGraph: {
    title: "Hustlin",
    description: "THE HUSTLIN’ HARDOS.",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cover bg-no-repeat bg-center bg-[url('/assets/images/webp/body-bg.webp')]">
        {children}
      </body>
    </html>
  );
}
