import { FaFire } from "react-icons/fa";
import { BiTime, BiStar } from "react-icons/bi";

export const links = [
  {
    href: "/?movieRequest=popular",
    label: "Populares",
    icon: <FaFire />,
  },
  {
    href: "/?movieRequest=latest",
    label: "Ultimas",
    icon: <BiTime />,
  },
  {
    href: "/?movieRequest=rated",
    label: "Mejores puntuadas",
    icon: <BiStar />,
  },
];
