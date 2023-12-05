import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactOptions = () => {
  return (
    <div className="flex flex-row gap-2">
      <a target="_blank" href="https://wa.me/+5491166244102" rel="noreferrer">
        <WhatsAppIcon />
      </a>
      <a target="_blank" href="https://telegram.me/pelbax" rel="noreferrer">
        <TelegramIcon />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/pablo-bentivengo/"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        target="_blank"
        href="mailto:pablobentivengo@gmail.com"
        rel="noreferrer"
      >
        <MailIcon />
      </a>
      <a target="_blank" href="https://github.com/BentiPab" rel="noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ContactOptions;
