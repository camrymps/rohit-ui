import "styled-components";
import type { RohitUITheme } from "./theme/theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends RohitUITheme {}
}
