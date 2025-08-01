
const reverse = (n)=> {
    
    let rev =0 ;
    let nCopy = n;
    n=Math.abs(n);
    while(n>0) {
       let rem = n%10;
        rev = (10*rev)+rem;
        n=Math.floor(n/10);
    }
    if(rev < -(2**31) || rev> (2**31)-1) return 0;
    return (nCopy < 0)? -1*rev : rev;
}