import { HeaderStyle } from "./Header.srtles";
import Logo from "../../LVL.png"
import { Link } from "react-router-dom";

const Header  =
    () => {
        return <HeaderStyle>
            <Link to={'/'}>
                <img src={Logo} alt="Logo" height="80px"/>
            </Link>
                <div className='title'>LVL News test-task</div>
               </HeaderStyle>
}

export  default  Header;