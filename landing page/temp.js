var array =[1,2,3,1,5,3]; // 

function FindDeplicated(array){

    ///array
    const result=[];
    console.log(array)
    console.log('************************')
    return array.filter((item, index) => console.log(`arrya = ${array.indexOf(item)} index = ${index} item= ${item} answer= ${array.indexOf(item) != index}`  )
    )
  
}
const answer= FindDeplicated(array)
console.log(answer);