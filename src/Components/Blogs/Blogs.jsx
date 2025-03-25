import React, { useEffect, useState } from 'react'

export default function Blogs() {

    const [bolgs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])

    return (
        <div>

        </div>
    )
}
