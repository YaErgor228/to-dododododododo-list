import React from 'react';

function NewToDoForm({newItem, setNewItem, hundleSubmit}) {
    return (
        <form className='new-item-form' onSubmit={hundleSubmit}>
            <div className='form-row'>
                <label htmlFor='item'> New Item</label>
                <input type='text' id='item' value={newItem} onChange={(event) => setNewItem(event.target.value)}></input>
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}

export default NewToDoForm;