import {Transporter} from "nodemailer";

const sendMail = (transporter: Transporter) => {
    return ({from, content: html}: { from: string, content: string }) => {
        return transporter.sendMail({
            to: 'katalinapozzoli2000@gmail.com',
            from,
            subject: 'Contact from katalinapozzoli.com',
            html
        })
    }
}

export default sendMail