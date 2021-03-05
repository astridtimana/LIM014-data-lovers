export const filterChampions = (data, condition) => 
data.filter(({tags}) => tags.includes(condition));

// export const filterChampions = (data, key, condition) => 
// data.filter(propChamp => propChamp[key].includes(condition));


export const orderChampions = (data, sortBy, sortOrder) => {
  //console.log(data)
  if ( sortOrder == "aZ"){
    
    const result = data.sort((a,b)=>{
         //console.log(a[sortBy]);
         //console.log(b[sortBy]);
      if (b[sortBy] > a[sortBy]){
        return -1;
    }
      if (b[sortBy] < a[sortBy]){
        return 1;
    }

    return 0;

    });
    //console.log(result);
    return result;
    
  } else {

    const result = data.sort((a,b)=>{

      
    if (b[sortBy] > a[sortBy]){
      return 1;
  }
    if (b[sortBy] < a[sortBy]){
      return -1;
  }

  return 0;

  });
   //console.log(result);
  return result;
  }
  
}

export const computeStats =  (data) => {
    // console.log(data);

g
  // function minMax(data) {
    return data.reduce((acc, val) => {
      //console.log(acc[0]);
      //console.log(val);
        acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
        acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
        
        return acc;
    }, []);
}