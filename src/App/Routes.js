import LoginForm from "../Features/onboarding/LoginForm";
import Process from "../Features/values/Process";
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
