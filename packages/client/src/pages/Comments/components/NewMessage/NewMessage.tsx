import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './NewMessage.scss';

const NewMessage: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (
    event: React.SyntheticEvent<HTMLFormElement, Event>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    // отправить сообщение
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValidated(!!value);
  };

  return (
    <Form className="form-new-comments" noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-100 pe-3" controlId="comments">
        <Form.Control
          required
          type="text"
          name="comments"
          placeholder="Your comment"
          isInvalid={validated}
          onChange={onChange}
        />
        {!validated && (
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
