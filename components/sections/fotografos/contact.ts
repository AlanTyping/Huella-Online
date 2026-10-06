const whatsappNumber = "541138235395";

const message = `Hola Huella Online! Soy fotógrafo/a y quiero una web para mostrar mi trabajo.

Me gustaría coordinar la charla gratuita de 15 minutos.

—— SOBRE MÍ ——
Nombre:
Tipo de fotografía (bodas, retrato, producto...):
Instagram / Portfolio:
Plan de interés:`;

export const fotografoWhatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  message,
)}`;
