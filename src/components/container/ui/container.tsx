import {ReactNode, FC} from "react";

interface IContainerProps {
    children: ReactNode
}

const Container: FC<IContainerProps> = ({children}) => {
    return (
        <div className="w-full padding-0 margin-0">
            {children}
        </div>
    )
}

export default Container;