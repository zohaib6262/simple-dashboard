const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Listing Details</h2>
        {/* Display details from the item */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
