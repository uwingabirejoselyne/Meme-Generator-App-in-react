import React from 'react'

const Form =({onAdd})=>{

const [formData, setFormData] = React.useState(
    {firstName:'',lastName: '',reminder: false}
)
const handleChange =(event) =>{
    const {name,value,type, checked}=event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            // [event.target.name]: event.target.value
            [name]: type === "checkbox" ? checked : value
        }
    })

}

const onsubmit = (event) => {
    event.preventDefault()
    if(!formData.firstName){
      alert('Please add first name')
      return
    }
    onAdd(formData)
    setFormData({
      firstName: '',
      lastName: '',
      reminder: true
    })
  }
 
  return (
    <form className='mt-16' onSubmit={onsubmit}>
        <div className='mb-5'>
            <label className='mr-5'>FirstName</label>
            <input type='text' placeholder='First Name' className='border border-gray-600' name='firstName'  onChange={handleChange} value={formData.firstName} ></input>
        </div>
        <div className='mb-5'>
            <label className='mr-5'>LastName</label>
            <input type='text' placeholder='Last Name' className='border border-gray-600' name='lastName'   onChange={handleChange} value={formData.lastName}></input>
        </div>
        <div className='mb-5'>
            <label className='mr-5'>Set Reminder</label>
            <input type='checkbox'   className='border border-gray-600' name='reminder'  onChange={handleChange} value={formData.reminder}></input>
        </div>
        <button type='submit' className='px-6 py-3 bg-teal-400'> Submit</button>
    </form>
  )
}

export default Form
 