import { Providers } from '@/components/Providers';
import { ThemeProvider } from '@/components/ThemeProvider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juan Without Borders | Inclusive Employment Platform',
  description: 'Connecting talented individuals with disabilities to forward-thinking corporate employers. Building inclusive workplaces, breaking barriers, and creating futures.',
  keywords: ['disability employment', 'inclusive hiring', 'accessible jobs', 'diversity employment', 'disability inclusion'],
  authors: [{ name: 'Juan Without Borders' }],
  openGraph: {
    title: 'Juan Without Borders | Inclusive Employment Platform',
    description: 'Breaking barriers, building futures. Connect with employers who value your abilities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Without Borders | Inclusive Employment Platform',
    description: 'Breaking barriers, building futures. Connect with employers who value your abilities.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('jwb-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Providers>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
