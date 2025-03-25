import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleReadTime = time => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
  }


  const handleAddBookMarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleReadTime={handleReadTime} handleAddBookMarks={handleAddBookMarks}></Blogs>
        <Bookmarks readTime={readTime} handleReadTime={handleReadTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
