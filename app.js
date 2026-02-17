const jobForm = document.getElementById('post');



const liveService = document.getElementById('jobSS').value;
const liveLocation = document.getElementById('locP').value;
const liveDesc = document.getElementById('jobDesc').value;
const liveBudget = document.getElementById('liveB').value;

document.getElementById('post').addEventListener('input',()=>{
    const service = document.getElementById('serves').value;
    const location = document.getElementById('location').value;
    const budget = document.getElementById('budget').value;
    const description = document.getElementById('desc').value;
    document.getElementById('jobSS').innerText = service;
    document.getElementById('locP').innerHTML = `<img src="/assets/location.svg"> ${location || 'Location'}`;
    document.getElementById('jobDesc').innerText = description || "Your job description will appear here...";
    document.getElementById('liveB').innerText = budget ? `₹ ${budget}` : "Budget Not Set";
});

