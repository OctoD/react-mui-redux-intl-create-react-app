import { Route } from "react-router-dom";
import { withUserSignedIn } from "@hocs/withUserSigned";

export default withUserSignedIn(Route);
