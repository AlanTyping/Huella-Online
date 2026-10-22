/** Tipo de cambio fijo usado para mostrar los precios en dólares. */
export const ARS_PER_USD = 1500;

/** Convierte un precio formateado en ARS ("199.999") a un número. */
function parseArs(price: string): number {
  return Number(price.replace(/\./g, "").replace(/\s/g, ""));
}

/** Convierte un precio formateado en ARS ("199.999") a su equivalente en USD. */
export function arsToUsd(price: string): number {
  return Math.round(parseArs(price) / ARS_PER_USD);
}

/** Valor de cada cuota en USD, formateado con coma decimal ("13,33"). */
export function usdInstallment(price: string, installments = 10): string {
  const perInstallment = parseArs(price) / ARS_PER_USD / installments;
  const rounded = Math.round(perInstallment * 100) / 100;
  return String(rounded).replace(".", ",");
}

/** Formatea un número en pesos con separador de miles y coma decimal. */
function formatArs(value: number): string {
  const [integer, decimals] = value.toFixed(2).replace(/\.00$/, "").split(".");
  const withThousands = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimals ? `${withThousands},${decimals}` : withThousands;
}

/** Valor de cada cuota en ARS, formateado ("19.999,90"). */
export function arsInstallment(price: string, installments = 10): string {
  return formatArs(parseArs(price) / installments);
}
