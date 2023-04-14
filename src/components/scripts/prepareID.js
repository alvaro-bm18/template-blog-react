function setIDfromTitle(item) {
    let href = '';
    let itemList = item.toLowerCase();
    for (let i = 0; i < itemList.length; i++) {
        let letter = itemList[i];
        let code = letter.charCodeAt(0);

        if (code === 241) href = href.concat('n');
        if (code === 32) href = href.concat('_');
        if (code >= 97 && 122 >= code) href = href.concat(letter);
        if (code >= 48 && 57 >= code) href = href.concat(letter);
    }
    return href;
}

export default setIDfromTitle;