import logo from "./../../../assets/logo.svg";

const Logo = () => {
    return (
        <div className={'flex row h-40 '}>
            <img src={logo} className="w-full object-cover object-center" alt={'logo'}/>
        </div>
    )
}
export default Logo;