// @ts-nocheck


import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const apiKey = process.env.SENDGRID_API_KEY;

// const sendEmail = async ({ name, email }) => {
//     await fetch(SENDGRID_API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${SENDGRID_API_KEY}`
//         },
//         body: JSON.stringify({
//           personalizations: [
//             {
//               to: [
//                 {
//                   'keyaria@teamzoon.com'
//                 }
//               ],
//               subject: 'Demo success :)'
//             }
//           ],
//           from: {
//             email: 'keyaria@teamzoon.com',
//             name: 'Test SendGrid'
//           },
//           content: [
//             {
//               type: 'text/html',
//               value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
//             }
//           ]
//         })
//     });
// }
//
// export { sendEmail };
// curl -i --request POST \
//  --url https://api.sendgrid.com/v3/mail/send \
//  --header 'Authorization: Bearer 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' \
//
//
//  curl -i --request POST \
//  --url https://api.sendgrid.com/v3/mail/send \
//  --header 'Authorization: Bearer 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' \
//  --header 'Content-Type: application/json' \
//  --data '{"personalizations": [{"to": [{"email": "recipient@example.com"}]}],"from": {"email": "keyaria@teamzoon.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Howdy!"}]}'
