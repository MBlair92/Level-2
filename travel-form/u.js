const form = document.querySelector('#guestForm');

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const age = formData.get("age");
    const gender = formData.get("gender");
    const destination = formData.get("destination");
    const dietaryRestrictions = formData.get("dietaryRestrictions");
    
    alert(`FirstName: ${firstName}\nLastName: ${lastName}\nAge: ${formData.get('age')}\nGender: ${formData.get('gender')}\nDestination: ${formData.get('destination')}\nDietaryRestrictions: ${dietaryRestrictions}`);
  });

