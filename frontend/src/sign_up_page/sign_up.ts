const sign_up_button1 = document.getElementById("sign_up_button") as HTMLButtonElement;

sign_up_button1.addEventListener("click", function() {
    const username = document.getElementById("username") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    const username_str = username.value;
    const email_str = email.value;
    const password_str = password.value;

    const dataToSend = {
        login: username_str,
        password: password_str,
        password_repeat: password_str,
    };

    sendData(dataToSend);

    alert(`Button clicked! ${username_str}`);
    console.log("Password:", password_str);
});

async function sendData(dataToSend: object) {
    try {
        const response = await fetch('http://0.0.0.0:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        }); 

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Response Data:', responseData);
    } catch (error) {
        console.error('Error:', (error as Error).message);
    }
}
