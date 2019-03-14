import React, { useState, useEffect } from 'react';

export default function ConponentToBeTested () {

    const name = useFormInput('Test')
    const lastName = useFormInput('First');

    useDocumentTitle(name.value + ' ' + lastName.value);
    
    return (
        <div className="component-to-be-tested">
            <input id="name" {...name}  />
            <input id="lastName" {...lastName} />
        </div>
    )
}
function useDocumentTitle(title) {
    useEffect(() => {
      document.title =  title;
    });
  }
  
  function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return {
      value,
      onChange : handleChange
    }
  }