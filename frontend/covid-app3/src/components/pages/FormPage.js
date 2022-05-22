import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput from 'react-text-mask';
import ApiService from '../../services/apiService';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const reasons = [
    'Diabetes',
    'Cardio-Vasculer Problems',
    'Allergies',
    'Cancer'
]
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const cities = [
    {
        value: 'Jerusalem',
        label: 'Jerusalem',
    },
    {
        value: 'Chicago',
        label: 'Chicago',
    },
    {
        value: 'Los Angeles',
        label: 'Los Angeles',
    },
    {
        value: 'Delhi',
        label: 'Delhi',
    },
];

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class FormPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        extra: [],
        date_of_birth: "2022-05-02",
        city: "Jerusalem",
        infected: false,
        error: false,
        errorMessage: {}
    }


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    phoneProps = {
        inputComponent: TextMaskCustom,
        onChange: this.handleChange('phone'),


    }

    async handleSubmit(event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.state.phone || this.state.phone.length < 10) {
            this.state.errorMessage.phone = "Please fill a valid 10 digits phone";
            this.state.error = true;
            return;
        }
        else {
            this.state.errorMessage = {};
            this.state.error = false;
        }
        // eslint-disable-next-line
        const body = { ...this.state, infected: this.state.infected == 'true' ? true : false, extra: !!this.state.other ? [...this.state.extra, this.state.other].join(',') : this.state.extra.join(',') }
        await ApiService.submitForm(body).then((response) => response.status === 200 && window.location.reload());


    }



    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} onSubmit={this.handleSubmit} autoComplete="off">
                <div style={{ display: 'flex', flexDirection: "column" }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TextField
                            required

                            label="First Name"
                            className={classes.textField}
                            onChange={this.handleChange('first_name')}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField
                            required

                            label="Last Name"
                            className={classes.textField}
                            onChange={this.handleChange('last_name')}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField

                            label="Date of Birth"
                            type="date"
                            defaultValue="2022-05-02"
                            className={classes.textField}
                            onChange={this.handleChange('date_of_birth')}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField
                            required

                            label="Address"
                            className={classes.textField}
                            onChange={this.handleChange('address')}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField

                            select
                            label="City"
                            className={classes.textField}
                            value={this.state.cities}
                            onChange={this.handleChange('city')}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="filled"
                        >
                            {cities.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>

                        <TextField

                            label="Zip Code"
                            className={classes.textField}
                            onChange={this.handleChange('zipcode')}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField
                            required
                            label="Land Line"
                            className={classes.textField}
                            onChange={this.handleChange('landline')}
                            margin="normal"
                            variant="filled"
                        />

                        <FormControl xs={12} sm={6} error={this.state.error}>

                            <TextField
                                required
                                error={!!this.state.errorMessage.phone}
                                label='Phone'
                                className={classes.textField}
                                InputProps={this.phoneProps}
                                margin="normal"
                                variant="filled"
                                helperText={
                                    this.state.errorMessage.phone &&
                                    this.state.errorMessage.phone
                                }
                            />
                            <FormHelperText>
                                {!!this.state.errorMessage.phone ? this.state.errorMessage.phone : ''}
                            </FormHelperText>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // eslint-disable-next-line
                                    checked={this.state.infected == 'true'}
                                    onChange={this.handleChange('infected')}
                                    value="true"
                                />
                            }
                            label="Got COVID19 in the past ?"
                            labelPlacement='top' />

                        <FormControl className={classes.formControl}>
                            <FormControlLabel
                                control={
                                    <Select
                                        multiple
                                        value={this.state.extra}
                                        onChange={this.handleChange('extra')}
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        autoWidth={true}
                                    >
                                        {reasons.map(name => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={!!this.state.extra && this.state.extra.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                }
                                label="Past diseases"
                                labelPlacement='top' />
                        </FormControl>

                        <TextField
                            label="Other disease"
                            className={classes.textField}
                            onChange={this.handleChange('other')}
                            margin="normal"
                            variant="filled"
                        />
                    </div>

                    <div style={{ display: 'flex', padding: '20px' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            data-cy=""
                        >
                            Submit
                    </Button>
                    </div>


                </div>
            </form>
        );
    }
}

FormPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormPage);
