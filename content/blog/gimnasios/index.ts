import type { BlogPost } from "../types";
import { meta as comoHacerMeta, Content as ComoHacerContent } from "./como-hacer-una-pagina-web-para-gimnasios";

export const posts: BlogPost[] = [{ ...comoHacerMeta, Content: ComoHacerContent }];
