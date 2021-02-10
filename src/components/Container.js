import React from "react";
import Editor from "./Editor";
import MdPreview from "./MdPreview";
import Footer from './Footer';
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
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder
    };
  }
  handleChange = (e) => {
    this.setState({ ...this.state, text: e.target.value });
  };
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <hr />
            <h1 className='headings'>Markdown Editor</h1>
            <hr />
            <Editor editorText={this.state.text} onChange={this.handleChange} />
          </div>
          <div className='col-md-6 col-12'>
            <hr />
            <h1 className='headings'>Markdown Preview</h1>
            <hr />
            <MdPreview mdText={this.state.text} />
            
          </div>
          
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default Container;
