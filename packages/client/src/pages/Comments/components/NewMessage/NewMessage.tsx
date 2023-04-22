import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CommentsController from '../../../../controllers/CommentsController';
import { userDataSelector } from '../../../../selectors/profile';
import './NewMessage.scss';
import { RootState } from '../../../../store';

const NewMessage: React.FC = () => {
  const userData = useSelector(userDataSelector);
  const currentTopic = useSelector(
    (state: RootState) => state.forum.currentTopic,
  );
  const [isValid, setIsValid] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement, Event>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isValid || !currentTopic) return;

    const form = event.currentTarget;

    const data = Object.fromEntries(new FormData(form)) as { text: string };

    await CommentsController.createComment({
      text: data.text,
      user_id: userData.id,
      topic_id: currentTopic.id,
    });

    setComment('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setIsValid(!!value);
    setComment(value);
  };

  return (
    <Form className="form-new-comments" noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-100 pe-3" controlId="text">
        <Form.Control
          required
          type="text"
          name="text"
          value={comment}
          placeholder="Your comment"
          isInvalid={!isValid}
          onChange={onChange}
        />
        {!isValid && (
          <Form.Control.Feedback type="invalid">
            Enter a comment
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" className="button">
        Send
      </Button>
    </Form>
  );
};

export default NewMessage;
