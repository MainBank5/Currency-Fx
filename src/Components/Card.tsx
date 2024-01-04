
import { ReactElement } from "react";
import { ReactNode } from "react";

type Cardstyle = {
    children:ReactNode;
}

const Card = ({children}: Cardstyle) : ReactElement => {
  return (
    <div className="bg-white/30 backdrop-blur-sm border w-2/4 rounded-lg flex flex-col place-items-center">
        {children}
    </div>
  )
}

export default Card