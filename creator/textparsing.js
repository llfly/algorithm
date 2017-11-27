const titleParse = (jq) => jq.text().trim();

const descriptionParse = jq => jq.text().trim();

const CodeMirrorParse = (data, lang = "javascript")=> {//java
    let str = "";
    if (data) {
        data = data.replace(/,$/, "").replace(/codeDefinition:/, "codeDefinition=");
        try {
            eval(data);
            (codeDefinition || []).some(item => {
                if (item.value === lang) {
                    str = item.defaultCode;
                    return true;
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    return str;
}

module.exports = {
    titleParse,
    descriptionParse,
    CodeMirrorParse
}