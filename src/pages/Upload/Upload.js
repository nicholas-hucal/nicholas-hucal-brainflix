import './Upload.scss'
import { Component } from 'react'
import Button from '../../components/Button/Button';
import Notification from '../../components/Notification/Notification';
import publishImg from '../../assets/images/icons/publish.svg'
import thumbImg from '../../assets/images/images/Upload-video-preview.jpg'
import Inputs from '../../components/Inputs/Inputs'
import { v4 as uuidv4 } from 'uuid';
import {Redirect} from 'react-router-dom';

class Upload extends Component {
    state = {
        fields: [
            {
                name: 'title',
                label: 'Title Your Video',
                type: 'text',
                validation: {
                    type: 'length',
                    check: 3,
                    errorMessage: 'You must enter more than 3 characters'
                },
                placeholder: 'Add a title to your video',
                error: 0,
                text: '',
                id: uuidv4(),
                valid: 0
            },
            {
                name: 'description',
                label: 'Add a video description',
                type: 'textarea',
                validation: {
                    type: 'length',
                    check: 10,
                    errorMessage: 'You must enter more than 10 characters'
                },
                placeholder: 'Add a description to your video',
                error: 0,
                text: '',
                id: uuidv4(),
                valid: 0
            }
        ],
        isValid: 0,
        submitted: 0
    }

    handleChange = (event, validation) => {
        this.isFieldValid(event, validation);
    }

    isFieldValid = (event, field) => {
        const { name, value } = event.target;
        const currentState = [...this.state.fields];
        let currentIndex = 0;
        const fields = currentState.map((stateField, index) => {
            if (stateField.name === field.name) {
                stateField.text = value;
                currentIndex = index;
            }
            return stateField;
        })
        if (fields[currentIndex].validation.type === 'length') {
            if (fields[currentIndex].text.length < fields[currentIndex].validation.check) {
                fields[currentIndex].error = 1;
                fields[currentIndex].valid = 0;
                this.setState({fields: fields});
            } else {
                fields[currentIndex].error = 0;
                fields[currentIndex].valid = 1;
                this.setState({fields: fields});
            }
        }
        this.isFormValid()
    }

    isFormValid = () => {
        const fields = [...this.state.fields];
        const sum = fields.reduce((field, {valid}) => field + valid, 0) 
        this.setState({
            isValid: Number(sum) === 2 ? 1 : 0 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: 1
        })
        setTimeout(() => {
            this.props.history.push('/');
            window.scrollTo(0,0);
        }, 5000)
    }

    showNotification = () => {

    }


    render() {
        const { fields, isValid, submitted } = this.state;
        console.log(isValid)

        return (
            <section className='app__container'>
                <main className='video-upload'>
                    <h1 className='video-upload__heading'>Upload Video</h1>
                    <form className='video-upload__form' onSubmit={this.handleSubmit}>
                        <section className='video-upload__form-inputs'>
                            <div className='video-upload__form-start'>
                                <label className='video-upload__label'>
                                    Video Thumbnail
                                    <img className='video-upload__thumbnail' src={thumbImg} alt="video to upload" />
                                </label>
                            </div>
                            <div className='video-upload__form-end'>
                                {fields.map(field => {
                                    return <Inputs field={field} key={field.id} handleChange={this.handleChange} />
                                })}
                            </div>
                        </section>
                        <section className='video-upload__buttons'>
                            <Button
                                className="video-upload__submit"
                                image={publishImg}
                                text="publish"
                                type="submit"
                                disable={isValid}
                            />
                            <Button
                                className="video-upload__cancel"
                                text="cancel"
                                type="cancel"
                                href="/"
                            />
                        </section>
                    </form>
                </main>
                {submitted === 1 && 
                    <Notification 
                        title="Thank you for your submission" 
                        message="You will be redirected to the homepage in 5 seconds."
                    />
                }
            </section>
        )
    }
}

export default Upload