import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HeroPacients } from "@/components/HeroPacients";

export default function Pacientes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroPacients />
      <Footer />
    </div>
  );
}