function partiotion(n,m){
    if(m == 1)
        return 1;
    else if(m < 1)
        return 0;
    return (partiotion(n,m-1) + partiotion(n-m,n-m-1));
}

console.log(partiotion(5,5))