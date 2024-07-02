import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/CounterSlice";

const App = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-10 items-center bg-slate-50 p-10 border border-purple-200 rounded-xl">
        <button onClick={() => dispatch(decrement())} className="btn btn-secondary text-xl">Decrement</button>
        <span className=" text-4xl">{count}</span>
        <button onClick={() => dispatch(increment())} className="btn btn-success text-xl">Increment</button>
      </div>
    </div>
  );
};

export default App;
