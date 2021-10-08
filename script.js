function defaultText(){
    let defText =` # Markdown Previewer

## By Kesav
[Check Out more](cgkesav.github.com)

### Definition 
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

Heres some code, \`<div></div>\`, between 2 backticks.
### This is the inline block code
\`\`\`
function test() {
    console.log("Welcome");
  }
\`\`\`


### This is the Unordered List 
- Code is
- always
- fun

> This is the Block Quote

![Kesav](https://icon-library.com/images/small-icon-images/small-icon-images-11.jpg)

**Bolded Text**
`;
    let editor =document.getElementById("editor");
    let pelement=document.getElementById("preview");
    editor.value=defText;
    pelement.innerHTML=marked(defText);
}

function previewUpdate(){
    let pelement=document.getElementById("preview");
    let editelement=document.getElementById("editor");
    pelement.innerHTML =marked(editelement.value);
}
