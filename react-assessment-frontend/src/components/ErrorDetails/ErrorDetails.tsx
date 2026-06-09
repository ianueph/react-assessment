import { useNavigate } from "react-router-dom";

type ErrorDetailsProps = {
    message?: string;
    onRetry?: () => void;
};

export function ErrorDetails({ message = "Page not found!", onRetry }: ErrorDetailsProps) {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}