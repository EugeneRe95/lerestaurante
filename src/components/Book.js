import React from 'react';
import 'date-fns';
import Slider from '@material-ui/core/Slider';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function valuetext(value) {
    return value;
}

export default function MaterialUIPickers() {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [guests, setGuests] = React.useState(1);

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const guestsChange = (event, value) => {
        setGuests(value);
    };
    const button = () => {
        const date = selectedDate;
        document.querySelector('#book-form').style.display='none';
        document.querySelector('#book-message').innerHTML = `
        <p>Your booking date: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} | ${(date.getHours()!==0) ? date.getHours():'00'}.${(date.getMinutes()!==0) ? date.getMinutes():'00'}</p>
        <p>Amount of guests: ${guests}</p>
        `;
    }
    return (
        <div id="book">
            <div id="book-container" className="animated fadeInLeft">
                <div id="book-image"></div>
                <div id="book-form">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <h3 style={{ marginTop: '15px' }}>Amount of guests</h3>
                <Slider
                    defaultValue={1}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    onChange={guestsChange}
                    valueLabelDisplay="auto"
                    min={1}
                    max={10}
                />
                <Button variant="contained" onClick={button}>Book</Button>
                </div>
                <div id="book-message"></div>
            </div>
        </div>

    );
}