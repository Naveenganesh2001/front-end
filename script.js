//get values
let submit=document.getElementById('submit');
let form = document.getElementById('form');

//form refresh state
form.addEventListener('submit',(e)=>{
    e.preventDefault();
});

//
submit.addEventListener('click',(e)=>{
    let Name = document.getElementById('name');
    let Phone_number = document.getElementById('pho.no');
    let Email_Id = document.getElementById('email');

    //
    Name=Name.value;
    localStorage.setItem('Name',Name);

    Phone_number=Phone_number.value;
    localStorage.setItem('Phone number',Phone_number);

    Email_Id=Email_Id.value;
    localStorage.setItem('Email Id',Email_Id);


});