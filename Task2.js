
//Task 2:- Supper array of object

const input =  [
    {framework : "React.JS", website : "Paypal"},
    {framework : "React.JS", website : "Tesla"},
    {framework : "Angular.JS", website : "Google"},
    {framework : "Next.JS", website : "holabhavin"},
    {framework : "Vue.JS", website : "Vue"},
    {framework : "Javascript", website : "heynikhil"}
]

const doSomething=(input)=>
{
    let output = []
    for(let item of input) {
         console.log(output)
        let index = output.findIndex((data)=>{
            return data.victim === item.framework
        });
        
        if(index == -1){
            output.push({victim: item.framework, count : 1})
        }else{
            output[index].count = output[index].count + 1;
        }
    }
    return output;
}

console.log(doSomething(input));