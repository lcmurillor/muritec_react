export const contact = {
  name: "Luis Carlos Murillo Rosales",
  role: "Ingeniero en Tecnologías de Información",
  email: "lcmurillor.dev@gmail.com",
  location: "Tilarán, Costa Rica",
};

export const socialLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/lcmurillor/" },
  { label: "GitHub", url: "https://github.com/lcmurillor" },
];

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Muritec", href: "#nosotros" },
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
      "Sitios web y aplicaciones a medida, fáciles de usar y optimizados para las necesidades de tu proyecto.",
    items: [
      "Interfaces adaptables a móviles, tabletas y computadoras",
      "Soluciones a medida para simplificar tareas y procesos",
      "Optimización de tiempos de carga y uso de recursos",
      "Pruebas, validaciones y control de errores para mejorar la calidad",
      "Tecnologías actuales y lenguajes de uso extendido para facilitar el mantenimiento",
    ],
  },
  {
    id: "datos",
    icon: "database",
    title: "Bases de datos",
    description:
      "Organiza y aprovecha tu información con bases de datos relacionales y no relacionales adaptadas a tu proyecto.",
    items: [
      "Diseño y organización de datos según las necesidades del negocio",
      "Gestión de SQL Server, Oracle Database, MariaDB, MySQL y PostgreSQL",
      "Soluciones con bases de datos no relacionales según el tipo de información",
      "Optimización de consultas, mantenimiento y gestión de accesos",
      "Administración con Oracle SQL Developer, SQL Server Management Studio y pgAdmin",
    ],
  },
  {
    id: "infraestructura",
    icon: "server",
    title: "Servidores e infraestructura",
    description:
      "Un entorno organizado para alojar tu web, ejecutar servicios y gestionar los archivos de tu hogar o negocio.",
    items: [
      "Instalación, configuración y administración de servidores Linux con Debian",
      "Alojamiento y puesta en marcha de páginas y servicios web",
      "Configuración de proxies inversos para dirigir el tráfico a cada servicio",
      "Gestión de NAS, almacenamiento compartido y permisos de acceso",
      "Mantenimiento, actualizaciones y copias de seguridad de servidores y archivos",
    ],
  },
];

export const projects = [
  {
    id: "hardware",
    title: "Cuidar cada componente.",
    category: "Mantenimiento de hardware",
    description:
      "Limpieza profunda, revisión y sustitución de componentes en equipos de escritorio y portátiles. Instalación de repuestos proporcionados por el cliente o de componentes nuevos elegidos según sus necesidades.",
    images: ["service-hardware"],
    imageAlt:
      "Revisión de componentes de una computadora en un banco de trabajo",
    imageCredit: "Tima Miroshnichenko",
    imageSource: "https://www.pexels.com/photo/man-fixing-a-computer-6754846/",
  },
  {
    id: "componentes",
    title: "Más velocidad. Más posibilidades.",
    category: "Venta de componentes",
    description:
      "Venta de componentes para computadoras y equipos de red. Instalación de unidades de estado sólido y clonación del disco anterior para actualizar el equipo conservando su información.",
    images: ["service-componentes"],
    imageAlt: "Módulos de memoria y procesadores para computadoras",
    imageCredit: "Andrey Matveev",
    imageSource:
      "https://www.pexels.com/photo/studio-shot-of-various-modern-ram-sticks-and-cpus-6373758/",
  },
  {
    id: "software",
    title: "Todo listo para volver a trabajar.",
    category: "Mantenimiento de software",
    description:
      "Instalación de sistemas operativos y aplicaciones con licencias oficiales, copias de seguridad, recuperación de archivos y actualización de software y controladores.",
    images: ["service-software"],
    imageAlt: "Trabajo con aplicaciones en una computadora y un portátil",
    imageCredit: "Christina Morillo",
    imageSource:
      "https://www.pexels.com/photo/person-using-both-computer-and-a-laptop-1181673/",
  },
  {
    id: "temperatura",
    title: "El rendimiento empieza por dentro.",
    category: "Cambio de pasta térmica",
    description:
      "Cambio de pasta y almohadillas térmicas en equipos portátiles y de escritorio. Limpieza del sistema de refrigeración con las herramientas adecuadas para cuidar la temperatura del equipo.",
    images: ["service-temperatura"],
    imageAlt: "Sistema de refrigeración de una computadora",
    imageCredit: "Ron Lach",
    imageSource:
      "https://www.pexels.com/photo/close-up-shot-of-a-computer-cooler-7858767/",
  },
  {
    id: "actualizacion",
    title: "Tu equipo todavía tiene mucho que dar.",
    category: "Actualización de hardware",
    description:
      "Ampliación de memoria RAM y almacenamiento, sustitución de discos y adaptación de bahías de almacenamiento. Mejoras elegidas según las características y necesidades de cada equipo.",
    images: ["service-actualizacion"],
    imageAlt: "Intervención en los componentes internos de un portátil",
    imageCredit: "IT services EU",
    imageSource: "https://www.pexels.com/photo/a-man-fixing-a-laptop-7639370/",
  },
];

export const imageUrl = (name, size = "large") =>
  `${import.meta.env.BASE_URL}images/${name}-${size}.webp`;
export const emailUrl = (
  message = "Hola, me gustaría consultar sobre los servicios de Muritec.",
) => `mailto:${contact.email}?subject=${encodeURIComponent("Consulta sobre servicios de Muritec")}&body=${encodeURIComponent(message)}`;
