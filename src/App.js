import React from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = function(event) {
    this.setState({
      markdown: event.target.value
    })
  }
  render() {  
    return (
      <div class='container-fluid'>
        <h1 class='text-center'>Markdown Previewer</h1>
        <h3 class='text-center'>by Sean Whitley</h3>
        <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
        <Preview markdown={this.state.markdown}/>
      </div>
    );
  }
}

const Editor = props => {
  return (
    <div class="mx-5 my-2 px-1 py-1">
      <textarea
        id='editor'
        onChange={props.onChange}
        value={props.markdown}
        className='form-control'
        rows='10'>
      
      </textarea>
    </div>
  )
}

const Preview = props => {
  return (
    <div 
      id='preview'
      class='mx-3 my-2 px-1 py-1'
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown)}}>
    </div>
  )
}

// FreeCodeCamp
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;