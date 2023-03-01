

((rate)=>{
    let stars=[]
    console.log(rate.toString().slice(-2));
    if (rate.toString().slice(-2)==".5"){
        let int=rate-.5
        for (let i=0;i<=int;i++){
            stars.push("star")
        }
        stars.push("half-star")
    }
    else{
        rate=Math.round(rate)
        for (let i=0;i<=rate;i++){
            stars.push("star")
        }
    }
    stars
})(4.8)