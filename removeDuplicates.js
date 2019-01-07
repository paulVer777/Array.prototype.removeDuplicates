
function removeDuplicates(arr) {
    
   const modArr = [...arr]

   modArr.forEach((value, index) => {
        
        for (let i = 0; i < modArr.length; i++) {

            if(value === modArr[i] && index !== i) 
                {
                    modArr.splice(i,1) 
                    i = 0 
                }
        }
   })
   return modArr
}
