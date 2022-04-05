
import { useEffect, useState } from "react";

const useData = () => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, []);
    return [infos, setInfos];
}
export default useData;