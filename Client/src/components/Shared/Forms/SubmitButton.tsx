import { Button } from "@headlessui/react";
import LoadingIndicator from "../../Login/LoadingIndicator.tsx";

/**
 * Props interface for SubmitButton component
 */
export interface SubmitButtonProps {
    label: string;
    isLoading?: boolean;
}

/**
 * SubmitButton Component
 *
 * A simple submit button component that indicates a loading state.
 *
 * @component
 * @param {SubmitButtonProps} props - The props for the SubmitButton component
 */
const SubmitButton = ({ label, isLoading }: SubmitButtonProps) => (
    <div className="w-full">
        <Button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-black py-2 px-4 text-base font-medium text-white shadow-inner shadow-white/10 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            disabled={isLoading}
        >
            {isLoading ? <LoadingIndicator /> : label}
            {isLoading && "Loading..."}
        </Button>
    </div>
);

export default SubmitButton;
