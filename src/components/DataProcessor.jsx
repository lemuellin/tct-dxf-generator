import findZC from "../helpers/findZC";
import findDia from "../helpers/findDia";
import preProcess from "../helpers/preProcess";
import findX from "../helpers/findX";
import findY from "../helpers/findY";
import findSR from "../helpers/findSR";
import updateXY from "../helpers/updateXY";
import toProgram from "../helpers/toProgram";
import FileSaver from 'file-saver';

const DataProcessor = (props) => {
    
    const processFile = () => {
        if(!props.file){
            alert('Please select a txt file.');
            return;
        }

        // 0. Separate into multiple sections with M25 and M08 -------
        const _file = preProcess(props.file);
        console.log(_file);

        // // 1. ZC
        // const ZC = findZC(props.file);

        // // 2. Diameter
        // const Diameter = findDia(props.file);

        // // 3. XY Coordinates
        // const X = findX(props.file);
        // const Y = findY(props.file);
        // if(X.length != Y.length){
        //     alert('Coordinate is missing XY value. Make sure all lines of coordinate includes both X and Y.');
        //     return;
        // }
        
        // // 4. Step and Repeat
        // // Format: SR = [[R1, X or Y, Distance1], [R2, X or Y, Distance2], [...]...]
        // const SR = findSR(props.file);

        // // 5. Update XY array with SR
        // // Format: updatedCoor = [[X1, X2, X3, X4...], [Y1, Y2, Y3, Y4...]]
        // let updatedCoor;
        // if(SR.length !== 0){
        //     updatedCoor = updateXY(X, Y, SR);
        // }else{
        //     updatedCoor = [X, Y];
        // }
        
        // // 6. Create Program for QCAD
        // const QCAD = toProgram(updatedCoor, Diameter);

        // // 7. Download Program for DXF
        // let blob = new Blob([QCAD], {
        //     type: "text/plain;charset=utf-8"
        // });
        
        // FileSaver.saveAs(blob, 'program.js');

    }


    return(
        <>
            <button onClick={() => {processFile()}}>Generate</button>
        </>
    );
}

export default DataProcessor;