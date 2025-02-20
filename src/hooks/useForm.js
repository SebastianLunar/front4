import { useState } from 'react'

export default function useForm (initialValues = {}) {
  const [formValues, setFormValues] = useState(initialValues)
  //formValues: valores de cada campo de mi formulario (objeto)
  //  {
  //    nombre: '',
  //    email: '',
  //    password: '',
  //    ...
  //  },
  //
  //

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  return { formValues, handleInputChange }
}
