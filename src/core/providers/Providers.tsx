import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
};
export default Providers;