function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "narnenani99@gmail.com" && pass === "nani0909") {
        location.href = "loan.html";
    } else {
        document.getElementById("msg").innerText = "Unauthorized Access!";
    }
}

function predictLoan() {
    let income = Number(document.getElementById("income").value);
    let loan = Number(document.getElementById("loan").value);
    let credit = Number(document.getElementById("credit").value);
    let result = document.getElementById("result");

    let history = JSON.parse(localStorage.getItem("history")) || [];

    if (income >= 50000 && credit >= 720 && loan <= income * 12) {
        result.innerText = "Loan Approved";
        history.push("Approved Loan: " + loan);
    } else {
        result.innerText = "Loan Rejected (Low income / credit score)";
        history.push("Rejected Loan: " + loan);
    }

    localStorage.setItem("history", JSON.stringify(history));
}
