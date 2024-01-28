const generateOtp = () => {
	let otp = "";
	let digits = "1234567890";
	for (let i = 0; i < 4; i++) {
		otp += digits[Math.floor(Math.random() * 10)];
	}
	let h2 = document.querySelector("h2");
	h2.innerHTML = otp;
};
