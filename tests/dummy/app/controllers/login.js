import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class LoginController extends Controller {
  @service
  session;
}
