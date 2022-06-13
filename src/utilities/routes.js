import Dashboard from "../pages/Dashboard.svelte";
import Home from "../pages/Home.svelte";
import SignIn from "../pages/SignIn.svelte";
import SignUp from "../pages/SignUp.svelte";

export default {
  "/": Home,
  "/login": SignIn,
  "/register": SignUp,
  "/dashboard": Dashboard,
};
