import Header from './components/Header'
//import React from 'react'  --- this is needed if you want to use class instead of function

function App() {
  return (
    <div className='container'>
      <Header title={1} />
    </div>
  );
}

// this is how you create component with class
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
