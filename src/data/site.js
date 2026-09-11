export const contact = {
  name: "Luis Carlos Murillo Rosales",
  role: "Ingeniero en Tecnologías de Información",
  email: "lcmurillor@hotmail.com",
  phone: "+506 8890-0888",
  telephone: "+50688900888",
  whatsapp: "https://wa.me/50688900888",
  location: "Tilarán, Costa Rica",
};

export const socialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/lcmurillor/" },
  { label: "GitHub", url: "https://github.com/lcmurillor" },
];

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Experiencia", href: "#experiencia" },
];

export const services = [
  {
    id: "computacion",
    icon: "computer",
    title: "Computación",
    description:
      "Dale una nueva vida a tu equipo. Mantenimiento, reparación y mejoras para que vuelva a rendir.",
    items: [
      "Mantenimiento preventivo y correctivo",
      "Actualización de RAM y almacenamiento",
      "Limpieza y cambio de pasta térmica",
      "Clonación de discos y recuperación de archivos",
      "Instalación de software y licencias oficiales",
    ],
  },
  {
    id: "redes",
    icon: "network",
    title: "Redes",
    description:
      "Conectividad bien resuelta para tu hogar o negocio. Desde el cableado hasta la configuración.",
    items: [
      "Diseño de topologías de red",
      "Venta e instalación de routers y switches",
      "Puntos de acceso y repetidores",
      "Fabricación e instalación de cableado de red",
    ],
  },
  {
    id: "programacion",
    icon: "code",
    title: "Programación",
    description:
      "Tus ideas, convertidas en soluciones. Sitios web y aplicaciones a la medida de lo que necesitas.",
    items: [
      "Desarrollo web y aplicaciones multiplataforma",
      "Diseño de interfaces y experiencia de usuario",
      "Trabajo colaborativo con GitHub",
      "Metodologías Scrum y Design Thinking",
    ],
  },
  {
    id: "datos",
    icon: "database",
    title: "Bases de datos",
    description:
      "Información organizada para trabajar mejor. Diseño y gestión de bases de datos para tus proyectos.",
    items: [
      "Diseño de bases de datos relacionales",
      "Implementación y gestión con Microsoft SQL Server",
      "Mantenimiento y optimización del rendimiento",
      "Seguridad y disponibilidad de la información",
    ],
  },
];

export const projects = [
  {
    id: "hardware",
    title: "Cuidar cada componente.",
    category: "Mantenimiento de hardware",
    description:
      "Limpieza profunda, revisión y sustitución de componentes en equipos de escritorio y portátiles. Trabajamos tanto con repuestos proporcionados por el cliente como con componentes nuevos a medida.",
    images: ["PC_Escritorio3", "Equipo_DVR", "PC_Portatil9"],
  },
  {
    id: "componentes",
    title: "Más velocidad. Más posibilidades.",
    category: "Venta de componentes",
    description:
      "Venta de componentes para computadoras y equipos de red. Instalación de unidades de estado sólido y clonación del disco anterior para actualizar el equipo conservando su información.",
    images: ["Hardware1", "Hardware2", "Hardware3"],
  },
  {
    id: "software",
    title: "Todo listo para volver a trabajar.",
    category: "Mantenimiento de software",
    description:
      "Instalación de sistemas operativos y aplicaciones con licencias oficiales, copias de seguridad, recuperación de archivos y actualización de software y controladores.",
    images: ["PC_Portatil10", "PC_Portatil3", "PC_Bios1"],
  },
  {
    id: "temperatura",
    title: "El rendimiento empieza por dentro.",
    category: "Cambio de pasta térmica",
    description:
      "Cambio de pasta y almohadillas térmicas en equipos portátiles y de escritorio. Limpieza del sistema de refrigeración con las herramientas adecuadas para cuidar la temperatura del equipo.",
    images: ["PC_Portatil8", "PC_Portatil20", "PC_Portatil19"],
  },
  {
    id: "actualizacion",
    title: "Tu equipo todavía tiene mucho que dar.",
    category: "Actualización de hardware",
    description:
      "Ampliación de memoria RAM y almacenamiento, sustitución de discos y adaptación de bahías de almacenamiento. Mejoras elegidas según las características y necesidades de cada equipo.",
    images: ["PC_Caddy1", "PC_Caddy2", "PC_Portatil7"],
  },
];

export const imageUrl = (name, size = "large") =>
  `${import.meta.env.BASE_URL}images/${name}-${size}.webp`;
export const whatsappUrl = (
  message = "Hola, me gustaría consultar sobre los servicios de Muritec.",
) => `${contact.whatsapp}?text=${encodeURIComponent(message)}`;
