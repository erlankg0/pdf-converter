import {ReactNode, FC} from "react";

interface IContainerProps {
    children: ReactNode
}

const Container: FC<IContainerProps> = ({children}) => {
    return (
        <div className="w-[1440px] px-0 py-0 mx-auto my-0">
            {children}
        </div>
    )
}

export default Container;