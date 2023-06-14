import { wrap } from "svelte-spa-router/wrap";
import Error from "../src/pages/404.svelte";

export const routes = {
  "/": wrap({
    asyncComponent: () => import("./pages/home/index.svelte"),
  }),
  "/about": wrap({
    asyncComponent: () => import("./pages/about/index.svelte"),
  }),
  "/test": wrap({
    asyncComponent: () => import("./pages/test/index.svelte"),
  }),
  "*": Error,
};
