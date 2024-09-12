import logo from "./../../../assets/logo.svg";

const Logo = () => {
    return (
        <div className={'flex column h-9 '}>
            <img src={logo} className="w-full object-cover object-center cursor-pointer" alt={'logo'}/>
        </div>
    )
}
export default Logo;