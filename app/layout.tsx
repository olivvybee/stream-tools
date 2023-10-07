import './globals.css';
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';

const font = Fredoka({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "olivvybee's streaming tools",
  description: 'Small set of tools olivvybee uses for streaming.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
