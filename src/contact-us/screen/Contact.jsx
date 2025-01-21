import React from 'react'
import FormControl from '../component/FormControl'
import ButtonCustom from '/src/practice-test/component/ButtonCustom'

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h1 className="header-text">Contact Us</h1>
        <div className="core-content">
          <h1>Have concerns? Let us know, and we’ll be happy to help.</h1>
          <div className="box-form">
            <FormControl />
            <ButtonCustom name="Send" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact