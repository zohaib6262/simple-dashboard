import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, item, close }) => {
  const modal = useRef();
  useEffect(() => {
    if (open) {
      modal.current.showModal();
    } else {
      modal.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={modal} className="result-modal" onClose={close}>
      {open && (
        <div className="bg-yellow-800 w-56 h-60">
          <h2>{item.listingId}</h2>
        </div>
      )}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
