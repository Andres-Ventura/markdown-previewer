function updatePreview() {
    document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value)
}


function setDefault() {
    let defaultText =`
# previewer
## the previewer 2
[Learn more about apple.com](https://www.apple.com).
<dl>
    <dt>Definition List</dt>
    <dd> Is something people use sometimes.</dd>

    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
    return multiLineCodeBlock;
}
\`\`\`

- This 
- is 
- an 
- example
- of 
- list
- items 

> Learn to Be a good programmer

![odd1sout](https://yt3.ggpht.com/ytc/AAUvwnjmqEErjAWkzchc6IGgkv3_AKV0wckR9KjEizIaRQ=s176-c-k-c0x00ffffff-no-rj)

**This is a Bolded Text**`;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML = marked(defaultText)
}


