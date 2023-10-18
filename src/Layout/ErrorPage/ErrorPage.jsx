import {AiOutlineRollback} from "react-icons/ai"
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-[220px] font-bold">404</h2>
        <h3 className="text-[120px] font-semibold">not found</h3>
        <Link className="flex justify-center items-center font-bold border hover:border-blue-500 p-3 rounded-xl hover:bg-gray-100"><AiOutlineRollback className="text-[70px] text-blue-500"/>Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
