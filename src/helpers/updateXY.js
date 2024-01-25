const updateXY = (X, Y, SR) => {
    SR.map((SR) => {
        const iteration = X.length;
        for(let i = 0; i < SR[0] - 1; i++){
            if(SR[1] == 'X'){
                for(let i = 0; i < iteration; i++){
                    X.push(X[i] + SR[2]);
                    Y.push(Y[i]);
                }
            }else{
                for(let i = 0; i < iteration; i++){
                    X.push(X[i]);
                    Y.push(Y[i] + SR[2]);
                }
            }
        }
    });

    return [X, Y];
}

export default updateXY;