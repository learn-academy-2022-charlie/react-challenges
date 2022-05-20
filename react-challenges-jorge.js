// The goal of the following challenge is for you to practice nesting components and getting familiar with class based component syntax.

// Create a new HTML file. Copy the following code into your file:

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
// <head>
//   <meta charset="utf-8">
//   <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
//   <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
//   <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   <title>Intro to React</title>

// </head>
// <body>

//   <div id="react-container"></div>

//   <script type="text/babel">
//     class App extends React.Component{
//       render(){
//         return(
//           <></>
//         )
//       }
//     }
//     const domContainer = document.querySelector('#react-container')
//     ReactDOM.render(<App />, domContainer)
//   </script>
// </body>
// </html>
// As a user, I see a Header component with the name of your cohort
// As a user, I can see a Content component that contains a list of all your classmates
// As a user, I can see a Footer component with your name