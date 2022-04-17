import "./styles.css";
import { useAppDispatch, useAppSelector } from "./app/hooks.tsx";
import { incremented, addSome } from "./features/counter/counter-slice.tsx";
import { useRef } from "react";
import { useFetchPlayersQuery } from "./features/players/players-api-slice.tsx";
import "./App.css";
export default function App() {
  const { data = [], isFetching } = useFetchPlayersQuery();
  const ref = useRef();

  type inputState = {
    input: number;
  };
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented());
  };
  type iAmount = {
    amount: number;
  };
  const handleAddSome = (amount: number) => {
    dispatch(addSome(amount));
  };
  return (
    <div className="App">
      <h1>Counter example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment + 1</button>
      <hr />
      <p>choose amount</p>
      <fieldset>
        <input type="number" ref={ref} defaultValue={1} />
        <button onClick={() => handleAddSome(ref.current.valueAsNumber)}>
          Add
        </button>
      </fieldset>

      <hr />
      <h1>RTK Query</h1>
      <h2>Arsenal players</h2>
      {isFetching && <h1>loading..</h1>}
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              //@ts-ignore
              Object.keys(...data).map((tHead) => (
                <th key={tHead}>{tHead.split("_").join(" ")}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((player) => (
              <>
                <tr>
                  <td>{player.id}</td>
                  <td>{player.first_name}</td>
                  <td>{player.last_name}</td>
                  <td>{player.position}</td>
                  <td>{player.birthdate}</td>
                  <td>{player.nationality}</td>
                  <td>{player.shirt_number}</td>
                  <td>
                    <img
                      src={player.player_image}
                      alt={player.first_name}
                      height={50}
                    />
                  </td>
                  <td>{player.on_loan ? "true" : "false"}</td>
                  <td>{player.first_team ? "true" : "false"}</td>
                  <td>{player.flag}</td>
                  <td>{player.loan_team}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}
