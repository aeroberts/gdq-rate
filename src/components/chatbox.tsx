import React from "react";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetChatHistoryDocument, SendChatDocument } from "../generated/graphql";
import { Avatar } from "./avatar";
import { Link } from "react-router-dom";
import { useTypedMutation } from "../hooks/useTypedMutation";

interface Props {}
export const ChatBox: React.FC<Props> = ({}) => {
  const { userData } = React.useContext(AuthContext);
  const textRef = React.useRef<HTMLInputElement | null>(null);

  const [sendChat] = useTypedMutation(SendChatDocument);
  const { loading, error, data } = useCachingSubscription(
    GetChatHistoryDocument
  );
  return (
    <>
      <Card.Body id="chatbox">
        <div>
          {loading ? "Loading..." : null}
          {data?.chat.map((i) => (
            <div className="d-flex chat-line mt-2">
              <Link to={`/profile/${i.user?.id}`}>
                <Avatar
                  uri={i.user?.avatar_url}
                  name={i.user?.display_name}
                  size={26}
                />
              </Link>
              <span className="ml-2">{i.body}</span>
            </div>
          ))}
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
              sendChat({ variables: { body: val } });
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
