import './App.scss';
import { useState } from 'react';

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [numThree, setNumThree] = useState(0);
  const [numFour, setNumFour] = useState(0);
  const [numFive, setNumFive] = useState(0);
  const [numSix, setNumSix] = useState(0);
  const [allNumbers, setAllNumbers] = useState([]);
  const [allRandomNumbers, setAllRandomNumbers] = useState([]);
  const [count, setCount] = useState(0);
  const [comp, setComp] = useState(false);
  const [compare, setCompare] = useState(false);
  const [res1, setRes1] = useState(0);
  const [res2, setRes2] = useState(0);
  const [res3, setRes3] = useState(0);
  const [res4, setRes4] = useState(0);
  const [res5, setRes5] = useState(0);
  const [res6, setRes6] = useState(0);
  const [res7, setRes7] = useState(0);
  const [res8, setRes8] = useState(0);
  const [res9, setRes9] = useState(0);
  const [res10, setRes10] = useState(0);
  const [res11, setRes11] = useState(0);
  const [res12, setRes12] = useState(0);

  function hasDuplicates(arr) {
    if (arr === undefined) return false;
    else return arr.some((x) => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  const generateRandomTable = () => {
    const arr = [];
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random() * 49) + 1);
      if (hasDuplicates(randomNumbers)) {
        randomNumbers.pop();
        i--;
      }
    }
    arr.push(randomNumbers);
    arr.push(Math.floor(Math.random() * 9) + 1);
    setAllRandomNumbers(arr);
  };

  const generateTable = () => {
    if (
      numOne !== 0 &&
      numTwo !== 0 &&
      numThree !== 0 &&
      numFour !== 0 &&
      numFive !== 0 &&
      numSix !== 0
    ) {
      setAllNumbers([
        [
          parseInt(numOne),
          parseInt(numTwo),
          parseInt(numThree),
          parseInt(numFour),
          parseInt(numFive),
        ],
        parseInt(numSix),
      ]);
    } else {
      alert('Merci de remplir tous les champs avec des valeurs valides');
    }
  };

  const compareTable = (arr1, arr2, compared) => {
    let counter = 0;
    if (compared) {
      for (let i = 0; i < arr1[0].length; i++) {
        if (arr2[0].includes(arr1[0][i])) {
          counter++;
        }
      }
      if (arr2[1] === arr1[1]) {
        setComp(true);
      } else {
        setComp(false);
      }
    }
    setCount(counter);
    if (arr1.length === 2) {
      generateResult(counter, comp);
    }
  };

  const generateResult = (count, complement) => {
    if (count === 5 && complement) {
      setRes1(res1 + 1);
    } else if (count === 5 && !complement) {
      setRes2(res2 + 1);
    } else if (count === 4 && complement) {
      setRes3(res3 + 1);
    } else if (count === 4 && !complement) {
      setRes4(res4 + 1);
    } else if (count === 3 && complement) {
      setRes5(res5 + 1);
    } else if (count === 3 && !complement) {
      setRes6(res6 + 1);
    } else if (count === 2 && complement) {
      setRes7(res7 + 1);
    } else if (count === 2 && !complement) {
      setRes8(res8 + 1);
    } else if (count === 1 && complement) {
      setRes9(res9 + 1);
    } else if (count === 1 && !complement) {
      setRes10(res10 + 1);
    } else if (count === 0 && complement) {
      setRes11(res11 + 1);
    } else if (count === 0 && !complement) {
      setRes12(res12 + 1);
    }
  };

  const generateAllTable = () => {
    generateRandomTable();
    generateTable();
    setCompare(allNumbers[0] !== undefined);
    compareTable(allNumbers, allRandomNumbers, compare);
  };

  return (
    <>
      <h1>LE HASARD NE SE CONTRÔLE PAS</h1>
      <p className="information">
        Saisir des nombres entre 1 et 49 (1 à 10 pour le dernier) et sans
        doublons
      </p>
      <div className="allNum">
        <ul className="base">
          <li>
            <input
              type="text"
              className="num"
              id="numero1"
              maxLength="2"
              disabled=""
              onChange={(e) =>
                e.target.value < 50 && e.target.value > 0
                  ? setNumOne(e.target.value)
                  : setNumOne(0)
              }
            />
          </li>
          <li>
            <input
              type="text"
              className="num"
              id="numero2"
              maxLength="2"
              disabled=""
              onChange={(e) =>
                e.target.value < 50 && e.target.value > 0
                  ? setNumTwo(e.target.value)
                  : setNumTwo(0)
              }
            />
          </li>
          <li>
            <input
              type="text"
              className="num"
              id="numero3"
              maxLength="2"
              disabled=""
              onChange={(e) =>
                e.target.value < 50 && e.target.value > 0
                  ? setNumThree(e.target.value)
                  : setNumThree(0)
              }
            />
          </li>
          <li>
            <input
              type="text"
              className="num"
              id="numero4"
              maxLength="2"
              disabled=""
              onChange={(e) =>
                e.target.value < 50 && e.target.value > 0
                  ? setNumFour(e.target.value)
                  : setNumFour(0)
              }
            />
          </li>
          <li>
            <input
              type="text"
              className="num"
              id="numero5"
              maxLength="2"
              disabled=""
              onChange={(e) => {
                e.target.value < 50 && e.target.value > 0
                  ? setNumFive(e.target.value)
                  : setNumFive(0);
              }}
            />
          </li>
        </ul>
        <input
          type="text"
          className="num"
          id="numero6"
          maxLength="1"
          disabled=""
          onChange={(e) => {
            e.target.value < 10 && e.target.value > 0
              ? setNumSix(e.target.value)
              : setNumSix(0);
          }}
        />
      </div>
      <div className="btn">
        <button onClick={generateAllTable}>Générer</button>
      </div>
      {compare && (
        <>
          <div className="allNumList">
            <div className="list">
              <p>Vos numéros</p>
              <ul>
                {!hasDuplicates(allNumbers[0]) ? (
                  <>
                    {allNumbers[0].map((num, index) => (
                      <li key={index}>{num}</li>
                    ))}
                    <li>{allNumbers[1]}</li>{' '}
                  </>
                ) : (
                  alert('Vous avez des doublons')
                )}
              </ul>
            </div>
            <div className="list">
              <p>Numéros gagnants</p>
              <ul>
                {allRandomNumbers[0].map((num, index) => (
                  <li key={index}>{num}</li>
                ))}
                <li>{allRandomNumbers[1]}</li>
              </ul>
            </div>
          </div>
          <p className="result">
            Vous avez {count} numéros gagnants, {comp ? 'avec ' : 'sans '} le
            numéro complémentaire{' '}
          </p>
        </>
      )}
      <ul className="allResult">
        <li>{res1} fois, 5 bons numéros avec le numéro complémentaire</li>
        <li>{res2} fois, 5 bons numéros sans le numéro complémentaire</li>
        <li>{res3} fois, 4 bons numéros avec le numéro complémentaire</li>
        <li>{res4} fois, 4 bons numéros sans le numéro complémentaire</li>
        <li>{res5} fois, 3 bons numéros avec le numéro complémentaire</li>
        <li>{res6} fois, 3 bons numéros sans le numéro complémentaire</li>
        <li>{res7} fois, 2 bons numéros avec le numéro complémentaire</li>
        <li>{res8} fois, 2 bons numéros sans le numéro complémentaire</li>
        <li>{res9} fois, 1 bon numéro avec le numéro complémentaire</li>
        <li>{res10} fois, 1 bon numéro sans le numéro complémentaire</li>
        <li>{res11} fois, 0 bon numéro avec le numéro complémentaire</li>
        <li>{res12} fois, 0 bon numéro sans le numéro complémentaire</li>
      </ul>
    </>
  );
}

export default App;
