/**
 * Auth entity
 */
export interface Auth {
    /**
     * User login
     */
    login: string;

    /**
     * User password
     */
    password: string;

    /**
     * User repeat password
     */
    passwordRep?: string;
}