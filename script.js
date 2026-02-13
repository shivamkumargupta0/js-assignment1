const eventForm = document.getElementById('event-form');
const eventsContainer = document.getElementById('events-container');
const clearAllBtn = document.getElementById('clear-all-btn');
const addSampleBtn = document.getElementById('add-sample-btn');
const demoInput = document.getElementById('demo-input');
const keyDisplay = document.getElementById('key-display');


eventForm.addEventListener('submit', function(e) {
    e.preventDefault();

    
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const category = document.getElementById('event-category').value;
    const desc = document.getElementById('event-desc').value;

    createEventCard(title, date, category, desc);
    eventForm.reset();
});


function createEventCard(title, date, category, desc) {
    
    const emptyMsg = document.querySelector('.empty-msg');
    if (emptyMsg) emptyMsg.remove();

    
    const card = document.createElement('div');
    card.className = 'event-card';
    
    
    card.innerHTML = `
        <span class="delete-btn">×</span>
        <h4>${title}</h4>
        <p><small>📅 ${date}</small></p>
        <span class="category-badge">${category}</span>
        <p>${desc}</p>
    `;

    eventsContainer.appendChild(card);
}


eventsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        
        const cardToRemove = e.target.parentElement;
        cardToRemove.remove();

        
        if (eventsContainer.children.length === 0) {
            eventsContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
        }
    }
});


clearAllBtn.addEventListener('click', () => {
    eventsContainer.innerHTML = '<p class="empty-msg">No events yet. Add your first event!</p>';
});


addSampleBtn.addEventListener('click', () => {
    const samples = [
        { t: "going for a event", d: "2020-10-19", c: "Conference", de: " web tech." },
          { t: "gaming event", d: "2020-07-18", c: "Conference", de: " web tech." },
        
    ];
    samples.forEach(s => createEventCard(s.t, s.d, s.c, s.de));
});


const titleInput = document.getElementById('event-title');
const demoDisplay = document.getElementById('key-display');


titleInput.addEventListener('input', (e) => {
   
    const lastChar = e.data || "Shift/Backsp"; 
    
    demoDisplay.textContent = `You Pressed: ${lastChar}`;
    
    
    demoDisplay.style.color = "#26a69a";
    demoDisplay.style.fontWeight = "bold";
});


document.addEventListener('keydown', (e) => {
   
    demoDisplay.innerHTML = `You Pressed: <span style="color: #ff5252;">${e.key}</span>`;
});
