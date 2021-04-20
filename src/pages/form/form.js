export default function Form(props){
    return (
        <div>
            <div role="alert">
                <h4>There are 2 errors in this form</h4>
                <ul>
                    <li>
                        <a href="#firstname" id="firstname_error">
                            The First name field is empty; it is a required field and must be filled in.
                        </a>
                    </li>
                    <li>
                        <a href="#birthdate" id="birthdate_error">
                            The Date field is in the wrong format; it should be similar to 17/09/2013 (use a / to separate day, month, and year).
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" aria-describedby="firstname_error" />
            </div>
        </div>
    )
}