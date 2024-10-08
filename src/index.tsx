import { createRoot } from "react-dom/client";
import { Counter } from "./features/counter";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div>
    <Counter />
  </div>,
);
