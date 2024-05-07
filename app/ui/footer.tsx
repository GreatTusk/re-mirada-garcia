import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { footerTheme } from "@/app/lib/themes";
import Link from "next/link";

export function FooterGarcia() {
  return (
    <Footer container theme={footerTheme}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
              src="/icon.png"
              alt="Flowbite Logo"
              name="MiradaGarcía"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <FooterTitle title="Nuestra experiencia" />
              <FooterLinkGroup col>
                <FooterLink href="/portafolio#fotos-concierto" as={Link}>
                  Conciertos
                </FooterLink>
                <FooterLink href="/portafolio#fotos-matrimonio" as={Link}>
                  Matrimonios
                </FooterLink>
                <FooterLink href="/portafolio#fotos-retratos" as={Link}>
                  Retratos
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Acerca de" />
              <FooterLinkGroup col>
                <FooterLink href="#">Quiénes somos</FooterLink>
                <FooterLink href="#">Términos &amp; Condiciones</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="MiradaGarcía™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon
              href="https://github.com/GreatTusk/re-mirada-garcia"
              target="_blank"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
