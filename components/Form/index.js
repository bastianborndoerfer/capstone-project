export default function Form({ price, quantity }) {
    
    
    const totalOutput = price * quantity;  
    return (
    <form>
      <label>
        Price per coin:
        <input
          type="number"
          name="price"
          value={price}
        //   onChange={handleChange}
          min={0}
          step={0.0000000001}
        />
      </label>

      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={quantity}
        //   onChange={handleChange}
          min={0}
          step={0.0000000001}
        />
      </label>

      <label>
        Total output:
        <input type="number" name="output" value={totalOutput} readOnly />
      </label>

      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <button type="cancel">Cancel</button>

      <button type="submit">Submit</button>
    </form>
  );
}
