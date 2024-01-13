import { Montserrat, Montserrat_Alternates } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const montsAlt = Montserrat_Alternates({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
