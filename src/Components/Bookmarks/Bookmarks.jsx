import BookMark from "../BookMark/BookMark";


export default function Bookmarks({readTime,bookmarks }) {
  return (
    <div className="md:w-1/3">
      <div>
        <div className="bg-[#c7bdff] ml-4 p-7 rounded-xl border-blue-900 border-2 flex justify-center align-middle text-2xl font-semibold">
          <p>Spent Time on read : {readTime} min</p>
        </div>
      </div>
      <div  className=' ml-4 bg-slate-50 pt-4 mt-4'>
        <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>

        {
          bookmarks.map(bookmark => <BookMark
            key={bookmark.id} bookmark={bookmark}></BookMark>)
        }
      </div>
    </div>
  )
}
