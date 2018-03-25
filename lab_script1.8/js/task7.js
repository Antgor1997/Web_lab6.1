function convertToRoman(n) {
    //Change this function
    const arr= ["I", "V", "X", "L", "C", "D", "M"];
    var arr1=[];
    var nuls=-1;
    var rez="";
    var m;
    var index=0;
    if(n<4000&&n>0){
        while(n!=0){
            m=n%10;
            arr1.push(m);
            n=(n/10)>>0;
            nuls+=1;
        }
        for(i=0; i<arr.length; i++){
            if(arr1[i]==4){
                rez=arr[index]+arr[index+1]+rez;
            }else if(arr1[i]==9){
                rez=arr[index]+arr[index+2]+rez;
            }else{
                if(arr1[i]>=5){
                    arr1[i]-=5;
                    for(j=0; j<arr1[i]; j++){
                        rez=arr[index]+rez;
                    }
                    rez=arr[index+1]+rez;
                }else{
                    for(j=0; j<arr1[i]; j++){
                        rez=arr[index]+rez;
                    }
                }
            }
            index+=2;
        }
        return rez;
    }else {
        return "Error!";
    }
}
function assert(expression, message) {
    if(expression) {
        console.log("+", message);
    }
    else {
        console.error("-", message);
    }
}
function runTask7() {
    assert(convertToRoman(1) == "I", "Case '#0'");
    assert(convertToRoman(5) == "V", "Case '#1'");
    assert(convertToRoman(10) == "X", "Case '#2'");
    assert(convertToRoman(15) == "XV", "Case '#3'");
    assert(convertToRoman(20) == "XX", "Case '#4'");
    assert(convertToRoman(40) == "XL", "Case '#5'");
    assert(convertToRoman(90) == "XC", "Case '#6'");
    assert(convertToRoman(101) == "CI", "Case '#7'");
    assert(convertToRoman(35) == "XXXV", "Case '#8'");
    assert(convertToRoman(132) == "CXXXII", "Case '#9'");
    assert(convertToRoman(281) == "CCLXXXI", "Case '#10'");
    assert(convertToRoman(276) == "CCLXXVI", "Case '#11'");
    assert(convertToRoman(299) == "CCXCIX", "Case '#12'");
    assert(convertToRoman(281) == "CCLXXXI", "Case '#13'");
    assert(convertToRoman(293) == "CCXCIII", "Case '#14'");
    assert(convertToRoman(101) == "CI", "Case '#15'");
    assert(convertToRoman(154) == "CLIV", "Case '#16'");
    assert(convertToRoman(216) == "CCXVI", "Case '#17'");
    assert(convertToRoman(71) == "LXXI", "Case '#18'");
    assert(convertToRoman(70) == "LXX", "Case '#19'");
    assert(convertToRoman(1077) == "MLXXVII", "Case '#20'");
    assert(convertToRoman(554) == "DLIV", "Case '#21'");
    assert(convertToRoman(1566) == "MDLXVI", "Case '#22'");
    assert(convertToRoman(1883) == "MDCCCLXXXIII", "Case '#23'");
    assert(convertToRoman(2294) == "MMCCXCIV", "Case '#24'");
    assert(convertToRoman(1802) == "MDCCCII", "Case '#25'");
    assert(convertToRoman(2762) == "MMDCCLXII", "Case '#26'");
    assert(convertToRoman(2306) == "MMCCCVI", "Case '#27'");
    assert(convertToRoman(1211) == "MCCXI", "Case '#28'");
    assert(convertToRoman(2754) == "MMDCCLIV", "Case '#29'");
    console.log("Done!");
}
runTask7();