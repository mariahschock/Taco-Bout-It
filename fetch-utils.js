const SUPABASE_URL = 'https://eahhmjbkevtqvjyrciae.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaGhtamJrZXZ0cXZqeXJjaWFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM2OTIyMDgsImV4cCI6MTk2OTI2ODIwOH0.D0GZv1xy0QcdmaM9dJr3FCobWoGH6RY4NQSZGvYM7Ek';

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
export async function home() {
    return (window.location.href = '../');
}
export async function communityBoard() {
    return (window.location.href = '../community-board');
}

// Region-page Functions
export async function getRegions() {
    const response = await client.from('Regions').select('*');
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function getRegionName(id) {
    const response = await client.from('Regions').select('*').match({ id: id });
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
        alert('Please sign in :)');

    } else {
        return response.data;
    }
}

export async function getTacoShops(id) {
    const response = await client.from('Shop_info').select('*').match({ region_id: id });
    console.log(response);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// Shop-info Functions
export async function getShopInfo(id) {
    const response = await client.from('Shop_info').select('*').match({ id }).single();
    return response.data;
}

// Displays reviews on the page
export async function getReviews(id) {
    const response = await client.from('user_review').select('*').match({
        shop_id: id,
    });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// Adds reviews to the page
export async function addReview(review) {
    const response = await client.from('user_review').insert(review);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// Deletes reviews from the page
export async function deleteReview(id) {
    const response = await client.from('user_review').delete().eq('id', id);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

                // Community Board functions
// Post/Meetup/Community Functions
export async function fetchPosts() {
    const response = await client.from('Community_board').select('*');
    return response.data;
}

export async function createPost(post) {
    const response = await client.from('Community_board').insert(post);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function deletePost(id) {
    const response = await client.from('Community_board').delete().eq('id', id);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// Reply to Post functions
export async function createReply(participant) {
    const response = await client.from('Participants').insert(participant);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

// Delete reply to post
export async function deleteReply(id) {
    const response = await client.from('Participants').delete().eq(id);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}