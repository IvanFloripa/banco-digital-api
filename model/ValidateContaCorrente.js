module.exports.validateConta = (valueBd, valueApi) => {
   if(valueApi > valueBd){
       return 1;
   }else{
       return 0;
   }
}