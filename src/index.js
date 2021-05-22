import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { FormProvider } from 'react-advanced-form'
import rules from './validation-rules'
import messages from './validation-messages'
import RegistrationForm from './RegistrationForm'

class App extends React.Component {
  state = {
    serialized: null
  }

  handleSubmitStart = ({ serialized }) => {
    this.setState({ serialized })
    alert('pendaftaran Berhasil')
  }

  render() {
    return (
      <FormProvider rules={rules} messages={messages}>
        <div className="Judul">
          <h2>Form Registrasi</h2>
        </div>
        <div className="flex">
          <RegistrationForm onSubmitStart={this.handleSubmitStart} />
          
        </div>
      </FormProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
