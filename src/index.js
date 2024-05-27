import 'bulma/css/bulma.css';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import './styles.css';

const root = createRoot(document.getElementById("root"));


root.render(<Provider store={store}>
<App />
</Provider>);