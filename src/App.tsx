import {
  decrement,
  increment,
  incrementByValue,
  reset,
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
        <span className=" text-4xl w-10 flex justify-center">{count}</span>
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
        <button
          onClick={() => dispatch(reset())}
          className="btn btn-info text-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default App;
