let n = process.argv.slice(2);
let cnt3=1;
let cnt5 = 1;
for(let i = 1; i < n; i++){
    let str = "";
    if(cnt3 == 3){
        str += 'Fizz'
        cnt3 = 0;
    }
    if(cnt5 == 5){
        str += 'Buzz'
        cnt5 = 0;
    }
    if(str == ""){
        str += i;
    }
    console.log(str);
    cnt3++;
    cnt5++;
}