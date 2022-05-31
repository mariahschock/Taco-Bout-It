const SUPABASE_URL = 'https://eahhmjbkevtqvjyrciae.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaGhtamJrZXZ0cXZqeXJjaWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2OTIyMDgsImV4cCI6MTk2OTI2ODIwOH0.D0GZv1xy0QcdmaM9dJr3FCobWoGH6RY4NQSZGvYM7Ek';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

// export function redirectIfLoggedIn() {
//     if (getUser()) {
//         location.replace('./other-page');
//     }
// }

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}


export async function getRegions() {
    const response = await client.from('Regions').select('*');
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function getTacoShops() {
    const response = await client.from('Shop_info').select('*');
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
