/**
 * Formatea una fecha en formato legible en español
 * @param date - Fecha a formatear
 * @returns Fecha formateada en formato "DD de Mes de YYYY"
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}