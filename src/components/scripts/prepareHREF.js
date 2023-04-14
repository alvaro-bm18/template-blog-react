import setIDfromTitle from './prepareID.js';

function setHrefArray(title){
    return title.map(item => setIDfromTitle(item));
}

export default setHrefArray;