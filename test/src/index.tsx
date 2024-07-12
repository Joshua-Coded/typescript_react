import * as React from 'react';
import * as ReactDOM from 'react-dom';
const App: React.FC = () => {
    return <h1>My React and Typescript App!</h1>;
};

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);