import React from "react";

// Prop usage example:
function Dialog(props) {
    return (
        <div className="Modal">
            {props.children}
        </div>
    )
}

function ConfirmationDialog() {
    return (
        <Dialog>
            <h1>Are you sure?</h1>
            <p>Do you really want to delete this file?</p>
            <button>Yes</button>
            <button>No</button>
        </Dialog>
    )
}

export default ConfirmationDialog;