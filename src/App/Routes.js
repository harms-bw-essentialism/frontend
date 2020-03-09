import LoginForm from "../Features/User/LoginForm";
import RegisterForm from "../Features/User/RegisterForm";
import Process from "../Features/SelectValues/Process";
import Dashboard from "../Features/Dashboard/Dashboard";
import EditProject from "../Features/Dashboard/EditProject";

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
  },
  {
    path: "/editProject",
    component: EditProject,
    private: true
  }
];

export default Routes;
