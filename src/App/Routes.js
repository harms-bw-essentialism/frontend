import LoginForm from "../Features/onboarding/LoginForm";
import Process from "../Features/values/Process";
import RegisterForm from "../Features/onboarding/RegisterForm";

const Routes = [
  {
    path: "/login",
    component: LoginForm
  },
  {
    path: "/processing",
    component: Process
  },
  {
    path: "/register",
    component: RegisterForm
  }
];

export default Routes;
