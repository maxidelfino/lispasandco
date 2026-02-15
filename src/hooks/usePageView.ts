import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "../analytics/ga";

export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    // envia page_view al montar y en cada cambio de ruta
    pageview(location.pathname);
  }, [location.pathname]);
};

export default usePageView;
