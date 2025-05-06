import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Zabeel Management & Marketing Consultancy',
  description: 'Founded in 1995 in the United Arab Emirates, Zabeel Management & Marketing Consultancy has steadily grown into a trusted and consistent business partner for more than 88 companies across various industries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}