//import sendgrid from '@sendgrid/mail';
//import { sendEmail } from '../../utils/sendEmail';


// export default async (req, res) => {
//   console.log("req", req);
//   if(req.method === 'POST') {
//        const { name, email } = req.body;
//        await sendEmail({ name, email });
//        return res.status(200).end();
//      }
//      return res.status(404).json({
//          error: {
//              code: 'not_found',
//              messgae: "The requested endpoint was not found or doesn't support this method."
//          }
//      });
// };


const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey('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')

  const { name, email, message, inquiry } = req.body

  const content = {
    to: 'pr@teamzoon.com',
    from: 'pr@teamzoon.com',
    subject: `New Message From - ${name} Inquiry - ${inquiry}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.send(req.body)
    res.status(400).send('Message not sent.')
  }
}
