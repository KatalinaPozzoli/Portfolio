import {createTransport} from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const createTransporter = (config: SMTPTransport.Options) => createTransport(config)

export default createTransporter;