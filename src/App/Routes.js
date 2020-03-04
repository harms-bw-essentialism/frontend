import LoginForm from "../Features/onboarding/LoginForm";
<<<<<<< HEAD
import Process from "../Features/values/Process";
=======
>>>>>>> fe67168b91bb77d0f176c8dcfaf25ff0ab81623a
import RegisterForm from "../Features/onboarding/RegisterForm";

const Routes = [
  {
    path: "/",
    component: RegisterForm,
    private: false
  },
  {
    path: "/login",
    component: LoginForm,
    private: false
  },
  {
    path: "/processing",
    component: Process,
    private: true
  }
];

export default Routes;
