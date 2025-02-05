function CounterButton({ itemsNumber, onSetItemsNumber }) {
  function handleIncrease() {
    onSetItemsNumber(itemsNumber + 1); 
  }

  function handleDecrease() {
    if (itemsNumber > 1) {
      onSetItemsNumber(itemsNumber - 1); 
    } else {
      onSetItemsNumber(0);
    }
  }

  return (
    <div className="btn rounded-sm bg-[#EEF1F6] hover:bg-[#E2E8F0] shadow-none py-1 px-4 w-[160px] h-[50px] flex justify-between">
      <button className="text-cyan-900" onClick={handleDecrease}>
        -
      </button>
      <span>{itemsNumber}</span>
      <button className="text-cyan-900" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default CounterButton;
