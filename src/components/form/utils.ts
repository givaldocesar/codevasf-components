export function checkCNPJ(cnpj: string){
    if(cnpj === ""){ return false }
    
    cnpj = cnpj.replace(/[^\d]/g, '');
    const values = cnpj.split('').map(value => parseInt(value));
    const base = [6,5,4,3,2,9,8,7,6,5,4,3,2];

    //Todos os valores são nulos
    if(values.reduce((value, sum) => sum += value) === 0)return false;

    //Primeiro DV
    let sum = 0;
    for(var i = 1; i < base.length; i++){
        sum += (base[i] * values[i-1]);
    }

    let mod = sum % 11;
    if(mod < 2 && values[12] !== 0){ return false }
    if(mod >= 2 && values[12] !== (11 - mod)){ return false }

    //Segundo DV
    sum = 0;
    for(var i = 0; i < base.length; i++){
        sum += (base[i] * values[i]);
    }

    mod = sum % 11;
    if(mod < 2 && values[13] !== 0){ return false }
    if(mod >= 2 && values[13] !== (11 - mod)){ return false }
    
    return true;
}