const preProcess = (array) => {
    let result = [];
    let isBetweenMarkers = false;
    let currentBlock = [];
    for (const line of array) {
      if (line.includes("M25")) {
        // Start collecting lines between M25 and M08
        isBetweenMarkers = true;
        currentBlock = [];
      } else if (line.includes("M08")) {
        // Stop collecting lines when M08 is encountered
        isBetweenMarkers = false;
        result.push(currentBlock);
      } else if (isBetweenMarkers) {
        // Collect lines between M25 and M08
        currentBlock.push(line);
      }
    }
    return result;
}

export default preProcess;