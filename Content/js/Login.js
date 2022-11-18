const pass_btn = document.querySelector('.container .pass-icon')
pass_btn.addEventListener("click", function(e){
  var inputPass = document.getElementById("password");
      if(inputPass.type == "password"){
        inputPass.type = "text";
      }else{
        inputPass.type = "password";
      }
});

const hover_pass = document.getElementById('password')
pass_btn.addEventListener("mouseover", function(e){
  var styleIcon = document.querySelector('.container .pass-icon')
  styleIcon.classList.add("pass-icon-hover");
});
pass_btn.addEventListener("mouseout", function(e){
  var styleIcon = document.querySelector('.container .pass-icon')
  styleIcon.classList.remove("pass-icon-hover");
});
