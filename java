// For the form, prevent the default submission and console log the values.
// You'll need to replace this with your own back-end service or use something like Firebase.

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
});

// For the calendar, you'll need to implement this yourself or use a library like FullCalendar

