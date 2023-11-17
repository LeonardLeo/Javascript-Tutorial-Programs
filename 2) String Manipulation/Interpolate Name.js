const fakeName = "Leo"

let message = `
    Hello, John! You left a package at the office today.
    You can pick up tomorrow at 10am, John. 
    If not I will drop it off this weekend.
    Goodbye John!
`;

new_message = message.replace(/John/g, `${fakeName}`)
console.log(new_message)