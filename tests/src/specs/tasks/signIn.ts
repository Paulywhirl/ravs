import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, UseAngular, Wait, Is }
 from 'serenity-js/lib/screenplay-protractor';
import { login } from '../user_interface/login';

export class signIn implements Task {

  public static toProfile(email: string, password: string): signIn {
          return new signIn(email, password);
        }

  @step('{0} signs in using their email: "#email"')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      UseAngular.disableSynchronisation(),
      Wait.until(login.register_icon, Is.visible()),
      Enter.theValue(this.email)
        .into(login.email),
      Enter.theValue(this.password)
        .into(login.password),
      Click.on(login.sign_in)
    )
  }

  constructor(private email: string, private password: string) {}
}
