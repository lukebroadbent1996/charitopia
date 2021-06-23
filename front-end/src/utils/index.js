export const getRecommended = async (name, description, rating) => {
    const response = await fetch('http://localhost:5000/', {
        method: 'GET', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name, 
            description: description,
            rating: rating,
        }),
    });
    const data = await response.json();
    return data
}