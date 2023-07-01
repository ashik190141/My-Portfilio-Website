import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Ahsan Mahmud`;
    },[title])
}

export default useTitle;