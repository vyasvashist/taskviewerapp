"use client"
import { title } from "process";
import { useRouter } from 'next/navigation'

interface CreateNewButtonProps {
    title: string;
    //onClick: () => void;
}

const CreateNewButton:React.FC<CreateNewButtonProps> = ({title}) => {
    const router = useRouter();
    return (
        <button 
        type="button" 
        // onClick={onClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-8 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => router.push('/newcard')}
        >
            {title}
        </button>
    );
}

export default CreateNewButton;