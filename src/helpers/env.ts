import * as dotenv from "dotenv";
import { cleanEnv, str } from "envalid";
import { cwd } from "process";
import { resolve } from "path";

dotenv.config({ path: resolve(cwd(), ".env") });

export default cleanEnv(process.env, {
  ACCOUNT: str(),
  AUTHID: str(),
  TOKENID: str(),
  TOKENSECRET: str(),
  URL: str(),
  NSENV: str(),
  GITURL: str(),
  EXCLUDED: str(),
  SLOW: str(),
  WORKSPACE: str(),
  ACTION: str(),
});
