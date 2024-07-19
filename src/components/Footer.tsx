
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-center bg-primary  ">
      <div className="container flex justify-center pt-1 text-center flex  items-center text-[20px] ">
        <a href="https://github.com/Santosh-yadav8005" target="_blank" className="m-1 hover:text-2xl"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sk8005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="m-1 hover:text-2xl"><FaLinkedin /></a>
        <a href="https://youtube.com/@coding_with_santosh?si=KwymhtSV6deYxoVa" target="_blank" className="m-1 hover:text-2xl"><FaYoutube /></a>
        <a href="https://wa.link/8xgen9" target="_blank" className="m-1 hover:text-2xl"><FaSquareWhatsapp /></a>
        <a href="https://www.instagram.com/santosh_yadav_up66?igsh=aWsweDNzcDRwOTUx"  target="_blank" className="m-1 hover:text-2xl"><FaSquareInstagram /></a>
      </div>





      <p className="container flex justify-center text-white pb-3 text-[23px] ">
        Made with <span className="text-[#ff1493] m-2" ><FaHeart /></span>  by Santosh Kumar Yadav
      </p>
    </div>
  )
}

export default Footer
