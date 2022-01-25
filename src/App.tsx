import React from 'react';
import './App.css';
import Contact from "./contact/contact";
import emailjs from "emailjs-com";

type Mystate = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export default class App extends React.Component {
  state: Mystate = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  }


  submit = (e: any) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_id', 'template_id', e.target, 'user_id')
      .then((result: any) => {
        console.log('4');

        this.reset()
        console.log(result.text);
      }, (error: any) => {
        console.log('4');

        console.log(error.text);
      });

  }

  reset = () => {
    this.setState({
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    })
  }

  change = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="flex flex-col text-gray-700">
        <div className=' m-auto py-10'>
          <h1 className='text-xl font-bold'>Contact</h1>
        </div>
        <div className=' m-auto'>
          <Contact change={this.change} submit={this.submit} {...this.state} />
        </div>
      </div>);
  }
}
