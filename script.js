let temporary=null;
let final=null;
let message=null;
function stablecolor(str){
    final=str;
    if(temporary===null)
    { document.querySelector(final).style.backgroundColor='#fb7413';
    document.querySelector(final).style.color='white';
    temporary=final;
    }
    else{
        document.querySelector(temporary).style.backgroundColor='hsl(217, 12%, 25%)';
    document.querySelector(temporary).style.color='hsl(216, 12%, 54%)';
        document.querySelector(final).style.backgroundColor='#fb7413';
    document.querySelector(final).style.color='white';
    temporary=final;
    }
}

document
.querySelector(".numbers")
.addEventListener('click',function(e){
    message=`You selected ${e.target.innerHTML} out of 5`
    stablecolor(`#${e.target.id}`)
})

const feedback = document.querySelector('.feedback')
const container = document.querySelector('.container')
const pass_message=document.querySelector('.msg_p');
document
.querySelector(".submit")
.addEventListener('click',function(e){
    if(message!==null){
    feedback.className='feedback';
    container.className='container hidden';
    pass_message.innerHTML=message;
    }
    else{
        alert("Please Select Rating");
    }
})