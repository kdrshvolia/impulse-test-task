import { css } from "./css";
import { Button } from "./components/Button";


const App = () => (
  <div className={css({
    padding: "20px"
  })}>
    <Button>Test</Button>
  </div>
);

export default App;
