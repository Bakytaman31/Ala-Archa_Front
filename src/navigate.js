import { useNavigate } from "react-router-dom";

export const Navigate = path => {
    console.log('hi');
    let navigate = useNavigate();
    navigate(path);
}