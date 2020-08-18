import React from "react";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { AuthContext } from "../contexts/gdq-rate-auth";

interface Props {}
export const ChatBox: React.FC<Props> = ({}) => {
  const { userData } = React.useContext(AuthContext);
  const textRef = React.useRef<HTMLInputElement | null>(null);
  return (
    <>
      <Card.Body id="chatbox">
        <div>
          <p>top</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>hey</p>
          <p>latest</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const val = textRef.current?.value;
            if (textRef.current) {
              textRef.current.value = "";
            }
            if (val) {
              // TODO: send chat
            }
          }}
        >
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Chat here..."
              ref={textRef}
              disabled={!userData}
            />
            <InputGroup.Append>
              <FormControl
                type="submit"
                id="basic-addon2"
                value="Send"
                disabled={!userData}
              />
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Card.Footer>
    </>
  );
};
