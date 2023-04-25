import { useState } from "react"

export const useTableActions = (setEditModal) => {
    const [row, setRow] = useState({})

    const handleDelete = (r) => {
        // TODO: Delete row
    }
    const handleUpdate = (r) => {
        // TODO: Update row
        setRow(r)
        setEditModal(true)
    }

    return {
        row,

        handleDelete,
        handleUpdate
    }
}
