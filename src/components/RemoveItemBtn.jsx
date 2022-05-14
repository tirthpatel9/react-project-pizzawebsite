import React from "react";

function RemoveItemBtn({ item, onRemove }) {
  return (
    <div className="container-remove-btn">
      <button className="remove-item-btn" onClick={() => onRemove(item)}>
        X
      </button>
    </div>
  );
}

export default RemoveItemBtn;
