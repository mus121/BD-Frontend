import Providers from '../../store/Providers';
import QueryProvider from '../QueryProvider';
// import Navbar from '../../component/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          <Providers>
            {/* <Navbar /> */}
            {children}
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
