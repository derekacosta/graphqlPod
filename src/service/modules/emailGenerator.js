import nodemailer from 'nodemailer'
import config from '../config'

export const sendWelcomeEmail = async (user, ctx) => {
  let mailer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.userMail,
      pass: config.passMail,
    },
  })

  let mailOptions = {
    to: user.email,
    from: 'solve@solve.io',
    subject: 'Welcome in the solve APP',
    html: `
      <div>hello ${user.name}</div>
      <div>Welcome in the solve App.</div>
        <div>Please find link to validate your email.
           ${ctx.request.headers.origin}/validateEmail?validateEmailToken=${user.validateEmailToken}
        </div>
    `,
  }
  return mailer.sendMail(mailOptions)
}

export const sendForgetPassword = (uniqueId, email, ctx) => {
  let mailer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.userMail,
      pass: config.passMail,
    },
  })

  let mailOptions = {
    to: email,
    from: 'solve@solve.io',
    subject: 'Forget Password - solve APP',
    html: `
      <div>hello</div>
      <div>Please find link to reset your password.
         ${ctx.request.headers.origin}/resetPassword?resetPasswordToken=${uniqueId}
      </div>
    `,
  }
  mailer.sendMail(mailOptions, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Mail sent to: ' + email)
    }
  })
}
