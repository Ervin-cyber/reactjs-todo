import { useNavigate } from "react-router";
import { useHooks } from "../hooks/ToDoHooks";
import { useEffect } from "react";

export function GenerateAndRedirectComponent() {
    const navigate = useNavigate();
    const { generateSampleData } = useHooks();
    console.log('GenerateAndRedirectComponent');
    useEffect(() => {
        generateSampleData();
        navigate("/", { relpace: true });
    }, [])

    return null;
}