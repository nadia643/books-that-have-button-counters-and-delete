// state, this.setState = hold/access/change data of component
// props = read only

import React from "react";
import Booklist from "./Booklist";
const App = () => (
  <section>
    <h1>This is our Application</h1>
    <Booklist />
  </section>
);

export default App;