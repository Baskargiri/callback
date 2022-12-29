var a=document.querySelector('.display');
var countdown=10;

let call_back=()=>{
    a.innerText=countdown;
    if(countdown==0){
        a.innerText="Happy Independence Day";
        clearTimeout(call_back);
    }else{
        countdown--;
        start_count_down=setTimeout(call_back,1000);
    }
}
call_back()
