
console.log('hello');

// load require.ensure React

// function loadReact() {
//   require.ensure(["react", "react-dom"], function(require) {
// 	  var react = require('react');
//     var reactDom = require('react-dom');

//     console.log('React loaded', react);
//     console.log('ReactDom loaded', reactDom);
//   });
// }

// load async React

async function loadReact() {
  try {
    let React = await import('react');
    console.log('React loaded');
    let ReactDom = await import('react-dom');
    console.log('ReactDom loaded');
  } catch (e) {
    console.error("loadReact error");
    return new Error(e);
  }
}

loadReact();
