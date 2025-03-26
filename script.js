function checkDrivingAge(){
    const age = parseInt(document.getElementById("ageInput").value);
    const message = age >= 16? `You can drive.` : `You cannot drive yet.`;
    document.getElementById("drivingMessage").textContent = message;
}