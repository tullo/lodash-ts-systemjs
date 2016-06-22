import { SocialNetwork } from './social-network';

import * as _ from 'lodash';

class App implements SocialNetwork {
  title = "web workers";
  getUsers() {
    return [{name : "amstutz"}]
  }
}

console.log(_.isArray(new App().getUsers()));
