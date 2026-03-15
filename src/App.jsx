import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json());

function App() {

  return (
    <>
      <h1>React World on the go...</h1>
      <Suspense fallback={<li>Loading Countries....</li>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
