import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries'


const CountriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {
  return (
    <>
      
      <Suspense fallback={<h2 style={{marginTop:'200px',color:'purple'}}>⌛On The Go Loading...</h2>}>
      <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
      
</>
  )
}

export default App
