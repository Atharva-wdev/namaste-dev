// const heading = React.createElement("h1",{id:"heading"},"Hello world from react that too from the different file");
const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "I'm an h1 tag"),React.createElement('h1', {}, "I'm an h1 tag")]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);