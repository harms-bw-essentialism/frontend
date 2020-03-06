import LoginForm from "../Features/onboarding/LoginForm";
import Process from "../Features/values/Process";
import RegisterForm from "../Features/onboarding/RegisterForm";
import Dashboard from "../Features/dashboard/Dashboard";

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
  },
  {
    path: "/dashboard",
    component: Dashboard,
    private: true
  }
];

export default Routes;
