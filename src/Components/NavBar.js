import { Button } from "./Button"

export function NavBar() {
    const value = [`What is Pursuit`,`Create an Account`, `Sign In`]

    return (
        <nav className="navBar">
            {value.map(val => {
                return(
                    <Button value = {val} />
                )
            })
        }

        </nav>
    )
}