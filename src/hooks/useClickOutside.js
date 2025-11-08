import { useEffect } from "react";

/**
 * Detecta clics fuera de uno o varios elementos referenciados.
 * @param {React.RefObject[] | React.RefObject} refs - Uno o varios refs de elementos.
 * @param {Function} callback - Función que se ejecuta al hacer clic fuera.
 */
export const useClickOutside = (refs, callback) => {
  useEffect(() => {
    // Función manejadora del clic
    const handleOutside = (event) => {
      // Aseguramos que refs sea un array
      const refArray = Array.isArray(refs) ? refs : [refs];

      // Verificamos si el clic fue fuera de TODOS los refs
      const isOutside = refArray.every(
        (ref) => ref?.current && !ref.current.contains(event.target)
      );

      if (isOutside && typeof callback === "function") {
        callback(event);
      }
    };

    // Escuchamos los clics del ratón o toques táctiles
    window.addEventListener("mousedown", handleOutside);
    window.addEventListener("touchstart", handleOutside);

    // Limpiamos los listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("touchstart", handleOutside);
    };
  }, [refs, callback]);
};
