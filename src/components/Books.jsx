import React from 'react'

const Books = ({ id,
    Title_DistinctivetitlebookCovertitle_TitleText,
    Contributor1_PersonName,
    Cover_File,
    Unique_URL,
     }) => {
  return (
    <>
    <section className='books-section'>
        <div>
            <a href={Unique_URL} target="_blank">
                <img src={Cover_File} alt={id}/>
            </a>    
        </div>
        <div>
            <h3>{Title_DistinctivetitlebookCovertitle_TitleText}</h3>
            <p>{Contributor1_PersonName}</p>
        </div>
    </section>
    </>
  )
}

export default Books