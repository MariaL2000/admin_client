import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Función para unir clases condicionales con Tailwind Merge
export const cn = (...classes) => twMerge(clsx(...classes));
