import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Lacrei Saúde" width={120} height={32} />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/termos" className="text-gray-600 hover:text-green-600">Termos de Uso</Link>
            <Link href="/privacidade" className="text-gray-600 hover:text-green-600">Política de Privacidade</Link>
            <Link href="/contato" className="text-gray-600 hover:text-green-600">Contato</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}