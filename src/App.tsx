import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-10 items-center bg-slate-50 p-10 border border-purple-200 rounded-xl">
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-secondary text-xl"
        >
          Decrement
        </button>
        <span className=" text-4xl">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success text-xl"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="btn btn-success text-xl"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default App;
