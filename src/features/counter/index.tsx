import { useState } from "react";

import "./styles.scss";

export function Counter({ className }: { className?: string }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
