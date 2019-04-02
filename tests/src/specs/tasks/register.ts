import { protractor } from 'protractor';
import { Click, Enter, PerformsTasks, step, Task, UseAngular, Wait, Is }
 from 'serenity-js/lib/screenplay-protractor';
import { login } from '../user_interface/login';

export class register implements Task {

  public static forProfile(email: string, password: string, first: string,
        last: string): register {
          return new register(email, password, first, last);
        }

  @step('{0} registers an account for "#email"')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      UseAngular.disableSynchronisation(),
      Wait.until(login.register_icon, Is.visible()),
      Click.on(login.register_icon),
      Enter.theValue(this.first)
        .into(login.firstName),
      Enter.theValue(this.last)
        .into(login.lastName),
      Enter.theValue(this.email)
        .into(login.email),
      Enter.theValue(this.password)
        .into(login.password),
      Click.on(login.register_icon)
    )
  }

  constructor(private email: string, private password: string,
              private first: string, private last: string) {
              }
}
