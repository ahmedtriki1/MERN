import React,{ useState } from 'react'

function Tabs({ items }) {
    const[content,setcontent]=useState(items[0].content);
    const handleTabClick = (index) => {
        setcontent(items[index].content);
        console.log(items)
    };
    return (
    <div>
        {items.map((item, index) => (
            <button
            key={index}
            onClick={() => handleTabClick(index)}
            >
            {item.label}
            </button>
            ))}
        <div>
            <textarea name="item" value={content}></textarea>
        </div>
    </div>
    )
}

export default Tabs