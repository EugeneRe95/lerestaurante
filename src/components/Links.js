import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            helperEmail: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onCheck(e) {
        const reg = new RegExp(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (e.target.name === 'email') {
            if (e.target.value.match(reg) || e.target.value === '') {
                this.setState({ [e.target.name]: e.target.value, error: false, helperEmail: '' })
            } else {
                this.setState({ [e.target.name]: e.target.value, error: true, helperEmail: 'Invalid Email' })
            }
        }
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.state.error){
            return '';
        }else if(this.state.email!==''){
            document.querySelector('#links-container').innerHTML=`<h1>Thanks for signing up! <i class="fas fa-smile-beam"></i></h1>`;
        }
    }
    render() {
        return (
            <div id="links">
                <div id="links-container">
                <h1>SIGN UP TO OUR NEWSLETTER</h1>
                <form>
                    <TextField id="filled-basic" label="E-MAIL ADDRESS" variant="outlined" value={this.state.email} required error={this.state.error} helperText={this.state.helperEmail} name="email" onChange={this.onChange} onBlur={this.onCheck} />
                    <button type="submit" onClick={this.onSubmit}>SIGN UP</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Links
