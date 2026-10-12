import type { BlogPost } from "../types";
import { meta as portfolioMeta, Content as PortfolioContent } from "./que-debe-tener-el-portfolio-de-un-estudio-de-arquitectura";

export const posts: BlogPost[] = [{ ...portfolioMeta, Content: PortfolioContent }];
