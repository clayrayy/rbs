import { AddItemForm } from 'components'
import React, { useState } from 'react'


export function AddBehaviorContainer() {
    const [inputType, setInputType] = useState('')
    const [behaviorName, setBehaviorName] = useState('')
    const [addItemFormOpen, setAddItemFormOpen] = useState(false)
    
        const handleAddBehavior = (e) => {
        e.preventDefault()
        setTimeout(() => {setAddItemFormOpen(false)}, 1000)
        
    }

    return (

        <AddItemForm>
            <AddItemForm.Base onSubmit={handleAddBehavior}>
                <AddItemForm.Title>Type</AddItemForm.Title>
                <AddItemForm.TypeButtonContainer>

                    <AddItemForm.TypeSelectorFrame>
                        <AddItemForm.TypeSelector
                            id='frequency'
                            name='frequency'
                            onChange={({ target }) => setInputType(target.name)}
                            value={inputType}
                            checked={inputType === 'frequency'}
                        />
                    </AddItemForm.TypeSelectorFrame>
                    <AddItemForm.TypeSelectorFrame>
                        <AddItemForm.TypeSelector
                            id='behavior'
                            name='behavior'
                            onChange={({ target }) => setInputType(target.name)}
                            value={inputType}
                            checked={inputType === 'behavior'}
                        />
                    </AddItemForm.TypeSelectorFrame>

                </AddItemForm.TypeButtonContainer>
                <AddItemForm.Title>Behavior name</AddItemForm.Title>
                <AddItemForm.Input
                    onChange={({ target }) => setBehaviorName(target.value)}
                    value={behaviorName}
                    placeholder='Behavior Name'
                />

                <AddItemForm.Submit>Add Tracker</AddItemForm.Submit>
            </AddItemForm.Base>
        </AddItemForm>
    )
}