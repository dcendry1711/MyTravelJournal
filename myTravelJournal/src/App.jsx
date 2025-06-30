import {Header} from './Header.jsx'
import {Note} from './Note.jsx'
import data from './data.js'

export function App() {

  const dataForComponent = data.map(note => {
    return (
      <Note 
        key = {note.id}
        {...note}
      />
    )
  })

  return (
    <main>
      <Header/>
      {dataForComponent}
    </main>
  )
}

