function checkPasswordStrength(password) {
  const specialChars = "!@#$%^&*";

  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }

    if (specialChars.includes(char)) {
      hasSpecial = true;
    }
  }

  if (password.length < 8) {
    console.log(`Password: "${password}" -> Weak (Too short)`);
  } else if (hasNumber && hasSpecial) {
    console.log(`Password: "${password}" -> Strong`);
  } else {
    console.log(
      `Password: "${password}" -> Medium (Add a number or special char)`
    );
  }
}

checkPasswordStrength("cat");
checkPasswordStrength("password123");
checkPasswordStrength("pass@word");
checkPasswordStrength("Pass@1234");