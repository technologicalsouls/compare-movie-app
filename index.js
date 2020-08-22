// helper function
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'fa03a2fe',
            s: searchTerm,
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

// every setTimeout has ID attached to it
let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000);
};
input.addEventListener('input', onInput);