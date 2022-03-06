import './CommentForm.scss';
import React, { Component } from 'react';
import { isFieldValid, isFormValid, emptyForm } from '../../utils/validation.js';
import fields from '../../utils/fields.js';
import buttonImg from '../../assets/images/icons/add_comment.svg';
import avatarImg from '../../assets/images/images/Mohan-muruge.jpg';
import Button from '../Button/Button';
import Inputs from '../Inputs/Inputs';
import Avatar from '../Avatar/Avatar';
import api from '../../utils/api.js';

class Commentform extends Component {

    state = {
        fields: fields.home,
        isValid: 0,
    }

    handleForm = (event, id) => {
        event.preventDefault();
        const comment = {
            name: "Mohan Muruge",
            comment: event.target.comment.value
        }
        api
            .addComment(comment, id)
            .then(response => {
                this.props.addComment(id);
                this.setState({
                    fields: emptyForm([...this.state.fields]),
                    isValid: 0
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange = (event, field, fieldsArray) => {
        const fields = isFieldValid(event, field, fieldsArray);
        const sum = isFormValid(fields);
        this.setState({
            isValid: Number(sum) === fields.length ? 1 : 0,
            fields: fields
        })
    }

    render() {
        const { fields, isValid } = this.state;
        const { id } = this.props.video;
        
        return (
            <section className='comment-form'>
                <div className='comment-form__form-container'>
                    <Avatar image={avatarImg} alt="avatar for user mohan" parentClass='comment-form__avatar' imgClass='comment-form__avatar-image'/>
                    <form className='comment-form__form' onSubmit={(event) => this.handleForm(event, id)}>
                        <Inputs
                            field={fields[0]}
                            key={fields[0].id}
                            handleChange={(event) => this.handleChange(event, fields[0], [...fields])} 
                        />
                        <Button
                            className="comment-form__submit"
                            image={buttonImg}
                            text="comment"
                            type="submit"
                            disable={isValid}
                            />
                    </form>
                </div>
            </section>
        )
    }
}

export default Commentform;
