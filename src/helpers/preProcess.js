import removeEmptyElements from "./removeEmptyElements";
import groupG93 from "./groupG93";

const preProcess = (array) => {
    // Remove '\r' from each element and filter out empty elements
    let modifiedArray = array.filter(element => element !== '\r').map(element => element.replace('\r', ''));
    
    let result = [];
    let currentContent = [];
    let startPoint = false;

    for (const line of modifiedArray) {
      if(line.startsWith('G93')){
        result.push(currentContent);
        startPoint = false;
        currentContent = [];
        result.push([line]);
      }
      if (line === 'M25') {
        result.push(currentContent);
        startPoint = true;
        currentContent = [];
      } else if (line === 'M30'){
        result.push(currentContent);
      } else if (startPoint) {
        currentContent.push(line.trim());
      }
    }
    result = removeEmptyElements(result);
    result = groupG93(result);

    return result;
}

export default preProcess;