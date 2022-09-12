const Discount=()=>{


    const sendDiscount = () => {
        alert("Yoor Discount Code is IBaker2022");

    }
    return (
    <div className="discount">
        <h1>Discount system</h1>
        <p>Enter Your information for getting 10% Discount Code</p>
        <p>When Our Baker will call You don't forget to say your Discount Code</p>
        <form className='discount-form'>
        <label htmlFor=''>First Name:</label>
        <input
          type='text'
          placeholder='ex. Natalia'
          name='name'
          id='name'
        />

        <label htmlFor=''>Last Name:</label>
        <input
          type='text'
          placeholder='Pahosava'
          name='last-name'
          id='last-name'
        />

        <label htmlFor=''>email:</label>
        <input
          type='text'
          placeholder='nataliapahosava@gmail.com'
          name='email'
          id='email'
        />

        <label htmlFor=''>Date Of Birth:</label>
        <input
          type='text'
          placeholder='ex. mm/dd/yyyy'
          name='dateofbirth'
          id='dateofbirth'
        />
        <label htmlFor=''>Phone number:</label>
        <input
          type='text'
          placeholder='ex. 333-333-3333'
          name='phone'
          id='phone'
        />
        <button className='discount-alert' onClick={sendDiscount}>
          Get Discount
        </button>
      </form>
     </div>
    )
}
export default Discount