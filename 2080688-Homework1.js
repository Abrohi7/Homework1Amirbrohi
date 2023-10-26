 // Function for update current date and time
function updateCurrentDateTime() {
  // Get the current date
  const currentDate = new Date();

  // date options for formatting
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  // day of the month with the appropriate suffix
  const day = currentDate.getDate();
  const dayWithSuffix = getDayWithSuffix(day);

  // Format the date
  const formattedDate = currentDate.toLocaleDateString('en-US', options)
    .replace('{day}', dayWithSuffix);

  //  display the formatted date
  document.getElementById('currentDateTime').textContent = `Today is: ${formattedDate}`;
}

// Function to get the day of the month with the appropriate suffix (e.g., 1st, 2nd, 3rd, 4th)
function getDayWithSuffix(day) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }

  const lastDigit = day % 10;
  let suffix = '';
  switch (lastDigit) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  return `${day}${suffix}`;
}

// Call the function to update the date immediately
updateCurrentDateTime();


// Call the function to update the date and time immediately
updateCurrentDateTime();
// Function to update the selected hours label
function updateSelectedHoursLabel() {
    const parkingHoursSlider = document.getElementById('parking_hours');
    const selectedHoursLabel = document.getElementById('selected_hours_label');
    const selectedHours = parkingHoursSlider.value;
    selectedHoursLabel.textContent = `Selected Hours: ${selectedHours}`;
}

// Call the function to update the label immediately
updateSelectedHoursLabel();


function clearForm() {
    // Clear text input fields
    document.getElementById('first_name').value = '';
    document.getElementById('middle_initial').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('dob_month').value = '';
    document.getElementById('dob_day').value = '';
    document.getElementById('dob_year').value = '';
    document.getElementById('email').value = '';
    document.getElementById('social_security').value = '';
    document.getElementById('address_line1').value = '';
    document.getElementById('address_line2').value = '';
    document.getElementById('city').value = '';
    document.getElementById('zip_code').value = '';
    document.getElementById('user_id').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm_password').value = '';

    // Clear radio buttons
    const paymentMethods = document.getElementsByName('payment_method');
    for (let i = 0; i < paymentMethods.length; i++) {
        paymentMethods[i].checked = false;
    }

    // Clear checkboxes
    const preferredSpots = document.getElementsByName('preferred_spots');
    for (let i = 0; i < preferredSpots.length; i++) {
        preferredSpots[i].checked = false;
    }

    // Clear range input
    document.getElementById('parking_hours').value = 6;
    document.getElementById('selected_hours_label').innerText = 'Selected Hours: 6';

    // Clear textarea
    document.getElementById('Special Requests:').value = '';
}

function submitForm() {
    // Implement your form submission logic or redirection to a thank-you page
    // For example, you can either use an alert for testing or open a new window for redirection.
    alert('Form submitted successfully!'); // or window.open('2080688-thankyou.html', '_blank');
}

function displayReview() {
  const reviewContent = constructReview();
  const reviewSection = document.getElementById('reviewSection');
  reviewSection.innerHTML = reviewContent; 
}
function constructReview() {
  const firstName = document.getElementById('first_name').value;
  const middleInitial = document.getElementById('middle_initial').value;
  const lastName = document.getElementById('last_name').value;
  const dobMonth = document.getElementById('dob_month').value;
  const dobDay = document.getElementById('dob_day').value;
  const dobYear = document.getElementById('dob_year').value;
  const email = document.getElementById('email').value;
  const socialSecurity = document.getElementById('social_security').value;
  const addressLine1 = document.getElementById('address_line1').value;
  const addressLine2 = document.getElementById('address_line2').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zipCode = document.getElementById('zip_code').value;
  const specialRequests = document.getElementById('Special Requests:').value;

  const preferredSpotsElements = document.getElementsByName('preferred_spots');
  const preferredSpots = [];
  for (const spot of preferredSpotsElements) {
    if (spot.checked) {
      preferredSpots.push(spot.value);
    }
  }

  const paymentMethodElements = document.getElementsByName('payment_method');
  let paymentMethod;
  for (const method of paymentMethodElements) {
    if (method.checked) {
      paymentMethod = method.value;
      break;
    }
  }

  const parkingHours = document.getElementById('parking_hours').value;
  const userId = document.getElementById('user_id').value;

  // Assuming you have a function formatPassword() to format the password securely
  const password = formatPassword(document.getElementById('password').value);

  const reviewContent = `
    <div class="review-form">
      <div class="name-container">
        <label>First Name:</label>
        <span>${firstName}</span>
      </div>
      <div class="name-container">
        <label>Middle Initial:</label>
        <span>${middleInitial}</span>
      </div>
      <div class="name-container">
        <label>Last Name:</label>
        <span>${lastName}</span>
      </div>
      <div>
        <label>Date of Birth:</label>
        <span>${dobMonth}/${dobDay}/${dobYear}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>${email}</span>
      </div>
      <div>
        <label>Social Security Number:</label>
        <span>${socialSecurity}</span>
      </div>
      <div class="name-container">
        <label>Address Line 1:</label>
        <span>${addressLine1}</span>
      </div>
      <div class="name-container">
        <label>Address Line 2:</label>
        <span>${addressLine2}</span>
      </div>
      <div>
        <label>City:</label>
        <span>${city}</span>
      </div>
      <div>
        <label>State:</label>
        <span>${state}</span>
      </div>
      <div>
        <label>Zip Code:</label>
        <span>${zipCode}</span>
      </div>
      <div>
        <label>Special Requests:</label>
        <span>${specialRequests}</span>
      </div>
      <div>
        <label>Preferred Parking Spots:</label>
        <span>${preferredSpots.join(', ')}</span>
      </div>
      <div>
        <label>Payment Method:</label>
        <span>${paymentMethod}</span>
      </div>
      <div>
        <label>Parking Hours:</label>
        <span>${parkingHours}</span>
      </div>
      <div>
        <label>User ID:</label>
        <span>${userId}</span>
      </div>
      <div>
        <label>Password:</label>
        <span>${password}</span>
      </div>
    </div>
  `;

  return reviewContent;
}

function formatPassword(password) {
  // Implement your password formatting logic here
  // For security, you might want to avoid displaying the actual password in the review
  // This is just a placeholder example
  return '*****'; 
}
function validateDateOfBirth() {
    var dobMonth = parseInt(document.getElementById("dob_month").value, 10);
    var dobDay = parseInt(document.getElementById("dob_day").value, 10);
    var dobYear = parseInt(document.getElementById("dob_year").value, 10);

    // Check if any of the date components are not valid numbers
    if (isNaN(dobMonth) || isNaN(dobDay) || isNaN(dobYear)) {
        alert("Please enter a valid date in MM/DD/YYYY format.");
        return false;
    }

    var enteredDate = new Date(dobYear, dobMonth - 1, dobDay); // Months are 0-based

    var currentDate = new Date();
    var minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120); // 120 years ago from the current date

    if (enteredDate > currentDate) {
        alert("Date of Birth cannot be in the future. Please enter a valid year.");
        document.getElementById("dob_year").focus();
        return false;
    }

    if (enteredDate < minDate) {
        alert("Date of Birth should be within the last 120 years.");
        return false;
    }

    return true; // Allow form submission
}

// This is the DOB validation function without <script> tags.

function submitForm() {
    if (validateDateOfBirth()) {
        // Implement your form submission logic here
        // For example, open the "thank you" page in a new window
        window.open('2080688-thankyou.html', '_blank');
    }
}


function submitForm() {
    if (validateDateOfBirth()) {
        // Implement your form submission logic here
        // For example, open the "thank you" page in a new window
        window.open('2080688-thankyou.html', '_blank');
    }
}
function addDashes(f) {
    var r = /(\D+)/g,
        npa = '',
        nxx = '',
        last4 = '';
    f.value = f.value.replace(r, '');
    npa = f.value.substr(0, 3);
    nxx = f.value.substr(3, 3);
    last4 = f.value.substr(6, 4);
    f.value = npa + '-' + nxx + '-' + last4;
  }
function submitForm() {
    if (validateDateOfBirth()) {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const nameError = document.getElementById('nameError');

        if (firstName.trim() === '' || lastName.trim() === '') {
            nameError.textContent = 'First Name and Last Name cannot be blank.';
        } else {
            nameError.textContent = ''; // Clear any previous error messages
            // Implement your form submission logic here
            // For example, open the "thank you" page in a new window
            window.open('2080688-thankyou.html', '_blank');
        }
    }
}
function submitForm() {
    if (validateDateOfBirth()) {
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const zipCode = document.getElementById('zip_code').value;
        const zipCodeError = document.getElementById('zipCodeError');

        if (firstName.trim() === '' || lastName.trim() === '') {
            zipCodeError.textContent = 'First Name and Last Name cannot be blank.';
        } else if (!isValidEmail(email)) {
            zipCodeError.textContent = 'Please enter a valid email address (e.g., name@domain.tld).';
        } else if (!isValidZipCode(zipCode)) {
            zipCodeError.textContent = 'Please enter a valid Zip Code (e.g., 12345 or 12345-6789).';
        } else {
            // Truncate Zip Code to the 5-digit format
            const truncatedZipCode = zipCode.substring(0, 5);
            document.getElementById('zip_code').value = truncatedZipCode;
            zipCodeError.textContent = ''; // Clear any previous error messages

            // Implement your form submission logic here
            // For example, open the "thank you" page in a new window
            window.open('2080688-thankyou.html', '_blank');
        }
    }
}

// Function to validate the email format
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
}

// Function to validate the Zip Code format
function isValidZipCode(zipCode) {
    // Zip Code should be either 5 digits or in the Zip+4 format (5 digits followed by a hyphen and 4 digits)
    const zipCodeRegex = /^\d{5}(?:-\d{4})?$/;
    return zipCodeRegex.test(zipCode);
}
// Function to update the selected hours label
function updateSelectedHoursLabel() {
    const parkingHoursSlider = document.getElementById('parking_hours');
    const selectedHoursLabel = document.getElementById('selected_hours_label');
    const selectedHours = parkingHoursSlider.value;
    selectedHoursLabel.textContent = `Selected Hours: ${selectedHours}`;
}

// Add an event listener to the slider for the "input" event
const parkingHoursSlider = document.getElementById('parking_hours');
parkingHoursSlider.addEventListener('input', updateSelectedHoursLabel);

// Call the function to initialize the selected hours label
updateSelectedHoursLabel();
function convertToLowerCase(input) {
    input.value = input.value.toLowerCase();
}
function validatePasswordMatch() {
  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;
  const password_match_error = document.getElementById('password_match_error');
  
  if (password === confirm_password) {
    password_match_error.textContent = '';
    return true; // Passwords match
  } else {
    password_match_error.textContent = 'Passwords do not match';
    return false; // Passwords do not match
  }
}

function validatePasswordFormat() {
  const password = document.getElementById('password').value;
  const password_format_error = document.getElementById('password_format_error');
  
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#%^&*()\-_+=\\/><.,`~])[A-Za-z\d!@#%^&*()\-_+=\\/><.,`~]{8,30}$/;

  if (password.match(passwordPattern)) {
    password_format_error.textContent = '';
    return true; // Password meets the format requirements
  } else {
    password_format_error.textContent = 'Password must be 8-30 characters and contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character (excluding quotes)';
    return false; // Password does not meet the format requirements
  }
}

function validatePassword(inputField) {
  // Check if the password format is valid
  const isFormatValid = validatePasswordFormat();
  
  // Check if the passwords match
  const doPasswordsMatch = validatePasswordMatch();
  
  // If both the format and match are valid, clear the error message
  if (isFormatValid && doPasswordsMatch) {
    document.getElementById('password_match_error').textContent = '';
  }
}

// You can call these functions as needed based on your form interactions





