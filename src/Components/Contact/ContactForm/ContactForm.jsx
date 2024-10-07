import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg ">
      <div>
        <h1 className="text-green-400 text-lg mb-3">Let's work together</h1>
        <p className="text-xs mb-4 text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          doloremque vel veritatis qui inventore nostrum quis.
        </p>
      </div>

      <div>
        <Form className="grid grid-cols-2 gap-4">
          <Form.Group className="col-span-1">
            <Form.Control
              className="form_input"
              type="text"
              placeholder="Firstname"
            />
          </Form.Group>

          <Form.Group className=" col-span-1">
            <Form.Control
              className="form_input"
              type="text"
              placeholder="Lastname"
            />
          </Form.Group>

          <Form.Group className=" col-span-1">
            <Form.Control
              className="form_input"
              type="email"
              placeholder="Email adderss"
            />
          </Form.Group>

          <Form.Group className=" col-span-1">
            <Form.Control
              className="form_input"
              type="text"
              placeholder="Phone number"
            />
          </Form.Group>

          <Form.Select
            className="col-span-2 form_input"
            aria-label="Default select example"
          >
            <option className="op_1">Open this select menu</option>
            <option className="op_2" value="1">
              One
            </option>
            <option className="op_3" value="2">
              Two
            </option>
            <option className="op_4" value="3">
              Three
            </option>
          </Form.Select>

          <Form.Group className="form_input  p-0 col-span-2">
            <Form.Control className="form_input" as="textarea" rows={3} />
          </Form.Group>

          <Button
            className="send_messeage col-span-2 max-w-44 mt-0"
            type="submit"
          >
            Send message
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
