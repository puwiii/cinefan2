import { BiHomeAlt, BiCameraMovie, BiMovie } from "react-icons/bi";
import { IoTv, IoHome, IoFilm } from "react-icons/io5";

export const links = [
  {
    href: "/",
    label: "Incio",
    icon: <IoHome />,
  },
  {
    href: "/movies",
    label: "Peliculas",
    icon: <IoFilm />,
  },
  {
    href: "/series",
    label: "Series",
    icon: <IoTv />,
  },
];
