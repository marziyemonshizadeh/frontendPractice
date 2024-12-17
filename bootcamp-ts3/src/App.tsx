import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="parent">
      <ol className="overflow-hidden" dir="rtl">
        <li>
          <Link to="/firstExercise" className="">
            تمرین اول
          </Link>
        </li>
        <li>
          <Link to="/SecondExercise" className="">
            تمرین دوم
          </Link>
        </li>
        <li>
          <Link to="/thirdExercise" className="">
            تمرین سوم
          </Link>
        </li>
        <li>
          <Link to="/forthExercise" className="">
            تمرین چهارم
          </Link>
        </li>
      </ol>
      <div className="bg-slate-100 rounded-md p-5 my-2">
        <p className="font-bold">result :</p>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
