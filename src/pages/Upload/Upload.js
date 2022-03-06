import './Upload.scss';
import { Component } from 'react';
import { isFieldValid, isFormValid, emptyForm } from '../../utils/validation';
import fields from '../../utils/fields.js';
import Button from '../../components/Button/Button';
import Notification from '../../components/Notification/Notification';
import publishImg from '../../assets/images/icons/publish.svg';
import thumbImg from '../../assets/images/images/Upload-video-preview.jpg';
import Inputs from '../../components/Inputs/Inputs';

class Upload extends Component {
    state = {
        fields: fields.upload,
        isValid: 0,
        submitted: 0
    }

    handleChange = (event, field) => {
        const fields = isFieldValid(event, field, [...this.state.fields]);
        const sum = isFormValid(fields);
        this.setState({
            isValid: Number(sum) === fields.length ? 1 : 0,
            fields: fields
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: 1,
            fields: emptyForm([...this.state.fields])
        });
        
        setTimeout(() => {
            this.props.history.push('/');
            window.scrollTo(0,0);
        }, 5000);
    }

    render() {
        const { fields, isValid, submitted } = this.state;

        return (
            <main className='video-upload'>
                <div className='video-upload__container'>
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
                    { submitted === 1 && 
                        <Notification 
                            title="Thank you for your upload" 
                            message="You will be redirected to the homepage in 5 seconds."
                        />
                    }
                </div>
            </main>
        )
    }
}

export default Upload