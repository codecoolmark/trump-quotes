import './App.css'
import QuoteList1 from './QuoteList1'
import QuoteList2 from './QuoteList2'

function App() {
  return (
    <>
    <h1>Random Trump Quotes</h1>
      <div className='two-colums'>
        <div>
          <h2>List 1</h2>
          <QuoteList1></QuoteList1>
        </div>
        <div>
          <h2>List 2</h2>
          <QuoteList2></QuoteList2>
        </div>
      </div>
    </>
  )
}

export default App
