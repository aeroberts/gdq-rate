import React from "react";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { AuthContext } from "../contexts/gdq-rate-auth";
import { useCachingSubscription } from "../hooks/useCachingSubscription";
import { GetChatHistoryDocument, SendChatDocument } from "../generated/graphql";
import { Avatar } from "./avatar";
import { Link } from "react-router-dom";
import { useTypedMutation } from "../hooks/useTypedMutation";
import moment from "moment";

interface Props {}
export const ChatBox: React.FC<Props> = ({}) => {
  const { userData } = React.useContext(AuthContext);
  const textRef = React.useRef<HTMLInputElement | null>(null);

  const [optimisticBuffer, setOptimisticBuffer] = React.useState<string[]>([]);

  const [sendChat] = useTypedMutation(SendChatDocument);
  const { loading, error, data } = useCachingSubscription(
    GetChatHistoryDocument,
    {
      onSubscriptionData: () => setOptimisticBuffer([]),
    }
  );
  return (
    <>
      <Card.Body id="chatbox">
        <div>
          {loading ? "Loading..." : null}
          {data?.chat.map((i) => (
            <div className="d-flex chat-line mt-2  justify-content-between">
              <div className="d-flex">
                <Link to={`/profile/${i.user?.id}`}>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="avatar-tooltip">
                        {i.user?.display_name}
                      </Tooltip>
                    }
                  >
                    <div>
                      <Avatar
                        uri={i.user?.avatar_url}
                        name={i.user?.display_name}
                        size={26}
                      />
                    </div>
                  </OverlayTrigger>
                </Link>
                <span className="ml-2 flex-nowrap">{i.body}</span>
              </div>
              <span className="ml-2 text-muted">
                {moment(String(i.sent_at)).format("h:mma")}
              </span>
            </div>
          ))}
          {optimisticBuffer.map((i) => (
            <div className="d-flex chat-line mt-2 chat-pending">
              <Link to={`/profile/${userData?.user_id}`}>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip id="avatar-tooltip">
                      {userData?.display_name}
                    </Tooltip>
                  }
                >
                  <Avatar
                    uri={userData?.avatar_url}
                    name={userData?.display_name}
                    size={26}
                  />
                </OverlayTrigger>
              </Link>
              <span className="ml-2">{i}</span>
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
              setOptimisticBuffer((a) => [...a, val]);
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
