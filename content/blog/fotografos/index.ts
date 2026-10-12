import type { BlogPost } from "../types";
import { meta as comoHacerMeta, Content as ComoHacerContent } from "./como-hacer-una-pagina-web-para-fotografos";
import { meta as cuantoCuestaMeta, Content as CuantoCuestaContent } from "./cuanto-cuesta-una-web-para-fotografos";
import { meta as portfolioMeta, Content as PortfolioContent } from "./que-debe-tener-el-portfolio-web-de-un-fotografo";

export const posts: BlogPost[] = [
  { ...comoHacerMeta, Content: ComoHacerContent },
  { ...cuantoCuestaMeta, Content: CuantoCuestaContent },
  { ...portfolioMeta, Content: PortfolioContent },
];
