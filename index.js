const lmn = async (company?:string): Promise<boolean>=>{
  if(!company){
    throw new Error("company not founded Error")
  }
  return true;
}

const abc = async(company?: string): Promise<void>=>{
   if(company){
     const isFound = await lmn(company);
     if(!isFound){
      throw new Error("company not authorized Error")
     }
   }
}

const xyz = async(): Promise<string>=>{
   const result = await abc();

  try{
   
    console.log(result);
  }catch(err){
    console.log('errr', err)
  }
  return "done";
}

xyz();
