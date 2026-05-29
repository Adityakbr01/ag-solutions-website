import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

/**
 * Modern data-router instance matching our split route tree.
 */
export const router = createBrowserRouter(routes);

export * from "./routes";
export default router;
