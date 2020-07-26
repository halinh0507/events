import React, { Component } from "react";
import firebaseConf from "./Firebase";
import "./App.css";
import "./index.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm() {
    this.refs.eventForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { Name, Time, Date, Length, Description} = snapshot.val();
      const data = { Name, Time, Date, Length, Description};
      this.setState({ form: [data].concat(this.state.form) });
    })
  }

  sendMessage(e) {
    e.preventDefault();
    const params = {
      Name: this.Name.value,
      Time: this.Time.value,
      Date: this.Date.value,
      Length: this.Length.value,
      Description: this.Description.value,
    };
    if (params.Name && params.Time && params.Length && params.Description) {
      firebaseConf.database().ref('form').push(params).then(() => {
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        this.showAlert('danger', 'Your message could not be sent');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <div className = 'all'>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
        <div className='container' style={{ padding: `40px 0px` }}>
        <div className='head'>
                  <label htmlFor='exampleInputTime1'>Search</label>
                  <br />
                  <input type='text' className='form-control' id='Search' placeholder='Search' ref={Time => this.Time = Time} />
                  <br />
                  <button type='submit' className='btn btn-primary'>Search</button>
                  <br />
                  <br />
                </div>
          <div className='row'>
            <div className='col-sm-4'>
              <h2>Event Form</h2>
              <br />
              <form onSubmit={this.sendMessage.bind(this)} ref='eventForm' >
                <div className='form-group'>
                  <label htmlFor='Name'>Name</label>
                  <input type='text' className='form-control' id='Name' placeholder='Name' ref={Name => this.Name = Name} />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputTime1'>Time</label>
                  <input type='text' className='form-control' id='Time' placeholder='Time' ref={Time => this.Time = Time} />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputTime1'>Date</label>
                  <input type='text' className='form-control' id='Date' placeholder='Date' ref={Date => this.Date = Date} />
                </div>
                {/* <br />
                  <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                <br /> */}
                <div className='form-group'>
                  <label htmlFor='exampleInputLength1'>Length</label>
                  <input type='text' className='form-control' id='Length' placeholder='Length' ref={Length => this.Length = Length} />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputLength1'>Description</label>
                  <input type='text' className='form-control' id='Description' placeholder='Description' ref={Description => this.Description = Description} />
                </div>
                
                <button type='submit' className='btn btn-primary'>Submit</button>
              </form>
            </div>
            <div className='col-sm-8'>
              <div className='row'>
                {this.state.form.map(form =>
                  <div className='col-sm-6' key={form.Description} style={{ margin: `0px 0px 30px 0px` }}>
                    <div className='card'>
                      <div className='card-body'>
                        <h4 className='card-title'>{form.Name}</h4>
                        <h6 className='card-subtitle-1'>{form.Description}</h6>
                        <br />
                        <h7 className='card-subtitle-2'>{form.Date}</h7>
                        <br />
                        <h8 className='card-subtitle mb-4 text-muted'>{form.Length}</h8>
                        <br />
                        <h9 className='card-subtitle mb-5 text-muted'>{form.Time}</h9>
                        <br />
                        <button type='submit' className='btn btn-primary'>RSVP</button>
                        
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}


export default App;

