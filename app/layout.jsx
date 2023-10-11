import LangToggler from '@/components/LangToggler';
import { inter, lora } from './fonts';
import './globals.css';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Rodrigo Rodríguez | Desarrollador Web',
  description: 'Portfolio de Rodrigo Rodríguez',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="container mx-auto px-2 text-gray-900">
          <header className="flex py-4 my-6 justify-between items-center">
            <h1 className={`${lora.className} text-2xl font-bold`}>
              Rodrigo Rodríguez
            </h1>
            <main className="flex gap-8">
              <LangToggler />
              <Menu />
            </main>
          </header>

          {children}
        </div>

        <Contact />
      </body>
    </html>
  );
}
