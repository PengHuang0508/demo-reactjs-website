import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BookAppointment.css';
import moment from 'moment';

class BookAppointment extends React.Component {
  constructor() {
    super();

    this.state = {
      //Owner's information
      name: '',
      new: false,
      phone: '',
      email: '',
      date: moment().format('YYYY-MM-DD'),
      time: '08:00',
      message: '',

      //Pet's information
      petName: '',
      petType: 'Dog',
      petBreed: '',
      petSex: 'Female',

      // Mailer status
      submitted: false,
      spinner: false,
      error: false,
    }
  }

  checkNewClient() {
    return (
      this.state.new ? <div className={s.fields}>
          <div style={{flexBasis: '100%', textAlign: 'center', paddingBottom: '25px'}}>
            Tell us about your pet.
          </div>

          <div className={s.textInput}>
            <div>Pet Name </div>
            <input type='text' value={this.state.petName} onChange={(e) => this.setState({petName: e.target.value})}/>
          </div>

          <div className={s.selectBox}>
            <div>Type</div>
            <select name="petType" onChange={(e) => this.setState({petType: e.target.value},function() {console.log(this.state.petType);})}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={s.textInput}>
            <div>Breed </div>
            <input type='text' value={this.state.petBreed} onChange={(e) => this.setState({petBreed: e.target.value})}/>
          </div>

          <div className={s.selectBox}>
            <div>Sex</div>
            <select name="petSex" onChange={(e) => this.setState({petSex: e.target.value},function() {console.log(this.state.petSex);})}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
        </div> : null
    );
  }

  getParams() {
    return {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      dateTime: this.state.date + " " + this.state.time,
      new: this.state.new ? 'Yes' : 'No',
      petName: this.state.petName,
      petType: this.state.petType,
      petBreed: this.state.petBreed,
      petSex: this.state.petSex,
      message: this.state.message,
    }
  }

  async sendEmail(params) {
    this.setState({spinner: true});

    const body = this.getParams();
    console.log(body);

    const resp = await fetch('/api/email', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const jsonResp = await resp.json();

    this.setState({spinner: false});

    if (jsonResp.success) {
      this.setState({submitted: true});
    }
    else {
      this.setState({error: true});
    }
  }

  tryAgain() {
    this.setState({error: false, open: true});
  }

  render() {
    if (this.state.error) {
      return <div className={s.msgContainer}>
        <div className={s.msg} style={{color: 'rgb(225, 50, 20)'}}><i className="fa fa-warning fa-lg"/> Oops! There was an error with your submission. </div>
        <div className={s.button} onClick={this.tryAgain.bind(this)}> Try Again </div>
      </div>
    }

    if (this.state.spinner) {
      return <div className={s.msg} style={{color: 'rgb(130, 180, 20)'}}><i className="fa fa-spinner fa-pulse fa-lg fa-fw"/> Sending your appointment request... </div>
    }

    if (this.state.submitted) {
      return <div className={s.msg} style={{color: 'rgb(30, 125, 170)'}}> Thank you! We have received your appointment request. We will contact you shortly. Have a nice day! <i className="fa fa-smile-o"/></div>
    }

    else {
      return <div className={s.form}>
        <div className={s.fields}>
          <div className={s.textInput}>
            <div> Name <span style={{color: 'red'}}>*</span></div>
            <input type='text' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
          </div>

          <div className={s.textInput}>
            <div> Phone <span style={{color: 'red'}}>*</span></div>
            <input type='tel' value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}/>
          </div>

          <div className={s.textInput}>
            <div> E-mail </div>
            <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          </div>

          <div className={s.checkbox}>
            <div> Are you a new client ?</div>
            <input type='checkbox' value={this.state.new} onChange={(e) => this.setState({new: !this.state.new})}/>
          </div>

          <div className={s.date}>
            <div> Preferred Date <span style={{color: 'red'}}>*</span></div>
            <input type='date' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
          </div>

          <div className={s.selectBox}>
            <div> Preferred Time <span style={{color: 'red'}}>*</span></div>
            <select className={s.selectBox} name='time' value={this.state.time} onChange={(e) => this.setState({time: e.target.value}, function() {console.log(this.state.time);})}>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
            </select>
          </div>

          {this.checkNewClient()}

          <div className={s.message}>
            <div className={s.messageTitle}> Message </div>
            <textarea type='text' value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}/>
          </div>
        </div>
        <div className={s.button} onClick={this.sendEmail.bind(this)}>SUBMIT</div> 
      </div>
      }
    }
  }

export default withStyles(s)(BookAppointment);