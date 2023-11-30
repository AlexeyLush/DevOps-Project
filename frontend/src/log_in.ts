const login_button = document.getElementById("login_button") as HTMLButtonElement;

let login_str: string ="";
let password_str1: string = "";

login_button.addEventListener("click", function() {
    

    let login = document.getElementById("username") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;

    login_str= login.value;
    password_str1 = password.value;

    const auth_data={
        login: login_str,
        password: password_str1
    }

    send_auth_data(auth_data)
    // alert(`Button clicked! ${password_str}`);
    // console.log("Password:", password_str);
});

async function send_auth_data(auth_data:object) {
    try{
        const response =await fetch("http://0.0.0.0:3000/api/login",{
            method:'POST',
            headers:{
                'Content-Type':"application/json",
            },
            body: JSON.stringify(auth_data)
        })
    }
    catch (error){
        console.error('Error:', (error as Error).message);
        
    }
    
}

