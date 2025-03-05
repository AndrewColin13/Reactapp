import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const FormField = ({ id, label, type, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-gray-700 mb-2">{label}</label>
        <TextField 
            type={type} 
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            required 
        />
    </div>
);

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormField;