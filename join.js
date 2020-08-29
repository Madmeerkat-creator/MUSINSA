var checkFlag= 'false';
function checkAll(field){
    if(checkFlag == 'false'){
        for(i=0; i<field.length; i++){
            field[i].checked = true;
        }
        checkFlag = 'true';
    }else{
        for(i=0; i<field.length; i++){
            field[i].checked = false;
        }
        checkFlag = 'false';
    }
}


//////////////////////////////////////////////////////////////////////////
function doDisplay(con){
    if(con.style.display === 'none')
        con.style.display='block';
    else
        con.style.display='none';
}
// function openTextFile() {
//     var input = document.createElement("input");
//     input.type = "file";
//     input.accept = "text/plain";
//     input.onchange = function (event) {
//         processFile(event.target.files[0]);
//     };
//     input.click();
// }
// function processFile(file) {
//     var reader = new FileReader();
//     reader.onload = function () {
//         output.innerText = reader.result;
//     };
//     reader.readAsText(file, "UTF-8");
// }

const agreeButton = document.getElementsByClassName("agree-button");
const agreeArticle = document.getElementsByClassName("agree-article");

agreeButton[0].addEventListener('click', function(e){
    e.preventDefault();
    doDisplay(agreeArticle[0]);
})
agreeButton[1].addEventListener('click', function(e){
    e.preventDefault();
    doDisplay(agreeArticle[1]);
})
agreeButton[2].addEventListener('click', function(e){
    e.preventDefault();
    doDisplay(agreeArticle[2]);
})
//위 부분을 좀더 효율적으로 작성할수는 없을까?

/////////////////////////////////////////////////////////////////////////

const joinButton = document.getElementsByClassName("join");
const idInput = document.getElementById("input-id");
const pwInput = document.getElementById("input-pw");
const emailInput = document.getElementById("input-em");
const btn = document.getElementById("submit-data");

let userID = idInput.value;
let userPW = pwInput.value;
let userEM = emailInput.value;

joinButton[0].addEventListener('click', function(e){
    e.preventDefault();
    const checkNecess = document.getElementsByClassName("checkNecess");
    for(var i=0 ; i<checkNecess.length; i++){
        if(checkNecess[i].checked == false){
            alert("아직 동의하지 않으신 약관이 있으세요!");
            return 0;
        }
    }
    
    alert("규신사에 가입하신걸 축하드립니다!");
    window.location ="index.html";
})
////////////////////////////////////////////////////////////////////////



// btn.addEventListener('click', async (e) => {
//     console.log('hi');
//     const res = await axios.get("http://localhost:8080/api/blog");
//     console.log(userID);
    
// })