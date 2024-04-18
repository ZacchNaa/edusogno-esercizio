class ApiConstants {
    static BASE_URL = "http://localhost:5000"
    static AUTH_BASE_URL = `${this.BASE_URL}/api/auth`
    static EVENTS_BASE_URL = `${this.BASE_URL}/api/events`

    // USER APIs
    static REGISTER_USER_URL = `${this.AUTH_BASE_URL}/register`
    static LOGIN_USER_URL = `${this.AUTH_BASE_URL}/login`
    static RESET_USER_PASSWORD_URL = `${this.AUTH_BASE_URL}/reset-password`

    // USER APIs
    static GET_ALL_EVENTS_URL = `${this.EVENTS_BASE_URL}/all-events`
    static GET_EVENT_ID_URL = `${this.EVENTS_BASE_URL}/events/` //events/:id
    static CREATE_EVENT_URL = `${this.EVENTS_BASE_URL}/create-event`
    static UPDATE_EVENT_URL = `${this.EVENTS_BASE_URL}/update-event`
    static DELETE_EVENT_URL = `${this.EVENTS_BASE_URL}/delete-event/` //delete-event/:id

}

export default ApiConstants