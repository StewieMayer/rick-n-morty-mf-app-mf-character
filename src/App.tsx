import { Provider } from "react-redux";
import { store } from "./app/store";
import React from "react";
import Characters from "./pages/characters/Characters";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Characters />
    </Provider>
  );
};

export default App;
