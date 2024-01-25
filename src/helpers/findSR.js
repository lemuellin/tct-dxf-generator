const findSR = (array) => {
    const SR = array.map(line => {
        const matchResult = line.match(/R(\d+)M02([XY])(-?\d+(\.\d+)?)/);
        if (matchResult) {
          const rValue = parseInt(matchResult[1]);
          const xyType = matchResult[2];
          const numericValue = parseFloat(matchResult[3]);
          return [rValue, xyType, numericValue];
        }
        return null;
    }).filter(Boolean);

    return SR;
}

export default findSR;