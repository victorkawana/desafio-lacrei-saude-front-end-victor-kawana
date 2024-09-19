import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroProfessionals } from "@/components/HeroProfessionals";

export default function Pacientes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroProfessionals />
      <Footer />
    </div>
  );
}