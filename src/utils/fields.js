import { v4 as uuidv4 } from 'uuid';

export default {
    upload: [
        {
            name: 'title',
            label: 'Title Your Video',
            type: 'text',
            class: 'video-upload__input',
            parentClass: 'video-upload__label',
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
            class: 'video-upload__textarea',
            parentClass: 'video-upload__label',
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
    home: [
        {
            name: 'comment',
            label: 'Join the Conversation',
            type: 'textarea',
            class: 'comment-form__textarea',
            parentClass: 'comment-form__label',
            validation: {
                type: 'length',
                check: 10,
                errorMessage: 'You must enter more than 10 characters'
            },
            placeholder: 'Add a new comment',
            error: 0,
            text: '',
            id: uuidv4(),
            valid: 0
        },
    ]
};