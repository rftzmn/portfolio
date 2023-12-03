import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsGit,
  BsGitlab,
  BsGithub,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://wa.me/+8801719773079">
          <BsWhatsapp />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/rftzmn/" target="blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/rftzmn" target="blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
