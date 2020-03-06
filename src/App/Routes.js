import LoginForm from "../Features/Onboarding/LoginForm";
import RegisterForm from "../Features/Onboarding/RegisterForm";
import Process from "../Features/SelectValues/Process";
import Dashboard from "../Features/Dashboard/Dashboard";

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
