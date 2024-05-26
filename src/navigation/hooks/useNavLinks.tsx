import { INavLink } from "@components/layouts/DefaultLayout/Header/NavItem";
import { useTranslation } from "react-i18next";

export const useNavLinks = () => {
 const { t } = useTranslation()

 const navLinks: INavLink[] = [
  { href: "/", label: t('navigation:home') },
//   { href: "/about-us", label: t('navigation:aboutUs') },
//   { href: "/contact-us", label: t('navigation:contactUs') },
 ];

 return { navLinks }
}