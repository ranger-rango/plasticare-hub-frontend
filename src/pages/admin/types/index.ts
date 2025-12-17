export interface CreateUserDs
{
    email: string;
    first_name: string;
    middle_name: string;
    surname: string;
    privilege: string;
}

export interface LoginDs
{
    email: string;
    password: string;
}

export interface RegisterDs
{
    email: string;
    password: string;
    password_confirm: string;
}