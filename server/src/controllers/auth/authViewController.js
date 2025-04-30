import authController from "./authController.js";

function loginForm(req, res) {
    const { error, message } = req.query;
    res.render("auth/login", { error, message });
}
function registerForm(req, res) {
    const { error, message } = req.query;
    res.render("auth/register", { error, message });
}

async function register(req, res) {
    try {
        const newUser = await authController.register(req.body);
        res.redirect("/login?message=Registered+successfully");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/register?error=` + error.message)
        } else {
            res.redirect(`/register?error=Internal+server+error`)
        }
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const loggedInUser = await authController.login(email, password);
        req.session.user = {
            user_id: loggedInUser.user_id,
            role: loggedInUser.role
        }
        res.redirect("/?message=You+are+logged+in");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/login?error=` + error.message)
        } else {
            res.redirect(`/login?error=Internal+server+error`)
        }
    }

}

function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}
export default {
    loginForm,
    registerForm,
    register,
    login,
    logout
}