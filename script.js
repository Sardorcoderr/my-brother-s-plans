
// Reja qo'shish uchun kerakli elementlarni tanlab olish
const planForm = document.getElementById('planForm');
const planInput = document.getElementById('planInput');
const planDate = document.getElementById('planDate');
const planList = document.getElementById('planList');
const completedCount = document.getElementById('completedCount');
const totalCount = document.getElementById('totalCount');

let plans = [];

// Reja qo'shish funksiyasi
planForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Inputlardan yangi reja yaratish
    const newPlan = {
        text: planInput.value,
        date: planDate.value,
        completed: false
    };
    
    // Rejani massivga qo'shish
    plans.push(newPlan);

    // Formani tozalash
    planInput.value = '';
    planDate.value = '';

    // Rejani sahifaga qo'shish
    renderPlans();
});

// Rejani sahifaga chiqarish funksiyasi
function renderPlans() {
    // Reja ro'yxatini tozalash
    planList.innerHTML = '';

    // Har bir reja uchun ro'yxat elementini yaratish
    plans.forEach((plan, index) => {
        const li = document.createElement('li');
        li.className = plan.completed ? 'completed' : '';
        
        li.innerHTML = `
            <span>${plan.text} (${plan.date})</span>
            <div>
                <button onclick="toggleComplete(${index})">${plan.completed ? 'Bekor qilish' : 'Bajarildi'}</button>
                <button onclick="deletePlan(${index})">O'chirish</button>
            </div>
        `;

        planList.appendChild(li);
    });

    // Statistika yangilash
    updateStats();
}

// Rejani bajarilgan sifatida belgilash
function toggleComplete(index) {
    plans[index].completed = !plans[index].completed;
    renderPlans();
}

// Rejani o'chirish funksiyasi
function deletePlan(index) {
    plans.splice(index, 1);
    renderPlans();
}

// Statistika yangilash
function updateStats() {
    const completedPlans = plans.filter(plan => plan.completed).length;
    const totalPlans = plans.length;

    completedCount.textContent = completedPlans;
    totalCount.textContent = totalPlans;
}
localStorage.setItem(key, value)