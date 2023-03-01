import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormCon = styled(Form)`
display: flex;
flex-direction: column;
gap: 10px;
padding: 15px;
border: 1px solid black;
width: 450px;`

export const Input = styled(Field)`
padding-left:5px;
height:30px;
border-radius:6px;
max-width:320px;`

export const Btn = styled.button`
width:110px;
padding: 4px;
border-radius:4px;
background-color: white;
cursor: pointer;
&:hover,
&:focus{
    background-color: lightgray;`

export const LabelStyle = styled.label`
display:flex;
gap: 5px;
flex-direction:column;`    
