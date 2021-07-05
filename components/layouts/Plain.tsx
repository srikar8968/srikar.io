import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const PlainLayout = ({children}: Props) => {
    return (
        <div className="plain-layout">
            { children }
        </div>
    )
}
export default PlainLayout