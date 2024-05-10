import MainHero from "@/app/ui/inicio/main-hero";
import Caracteristicas from "@/app/ui/inicio/caracteristicas";
import Estadisticas from "@/app/ui/inicio/estadisticas";
import LlamadaAccion from "@/app/ui/inicio/llamada-accion";

export default function MyPage() {
  return (
    <main>
      <MainHero />
      <Caracteristicas />
      <Estadisticas />
      <LlamadaAccion />
    </main>
  );
}
