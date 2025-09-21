import Data from "./componants/Data/Data";
import { Suspense } from "react";
import "./App.css";
// import { add, diff, mult, divide as div } from "./utils/math/math";

const jsonDataPromise = fetch('./json.json').then(res => res.json());


function App() {
  
  // const sum = add(21, 2);
  // const subs = diff(21, 5);
  // const mults = mult(5, 877);
  // const devide= div(100 / 2);
  // const divide = Number(50 / 5)
  // console.log("sum is a: ", sum,"subs is a : ", subs, "mult is a : ", mults, "divide is a: ", devide,"div is a : ", divide);

  return (
    <>
      
      <h1> Fake JSON Data fetch</h1>
      <Suspense fallback={<h3>data is coming..........</h3>}>
        <Data jsonDataPromise={jsonDataPromise}></Data>
      </Suspense>
    </>
  );
}

export default App;
