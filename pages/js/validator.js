
///////doi tuong `Validator`
function Validator(options){
    
    var formElement = document.querySelector(options.form);
    console.log(options.rules);
    if(formElement){
        
    }

}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (){
            
        }
    };
}
Validator.isPassword = function(selector) {
    return {
        selector: selector,
    };
}