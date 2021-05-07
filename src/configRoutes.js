import { routes } from "./routes";
import Template from "./template/Template";
export const showHome = () => {
  if (routes && routes.length) {
    return routes.map((item, index) => {
      return (
        <Template
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};