import * as dotenv from 'dotenv';
import { cleanEnv, str, } from 'envalid';
import { cwd } from 'process';
import { resolve } from 'path';

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  ACCOUNT: str(),
  AUTHID: str(),
  TOKENID: str(),
  TOKENSECRET: str(),
  URL: str(),
  NSENV: str(),
  GITURL: str(),
  EXCLUDED: str(),
  WORKSPACE: str(),
});
