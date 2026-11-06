// 5. ЗАГРУЗКА КЛАССОВ (Красивые карточки)
async function loadClasses(uid) {
    classList.innerHTML = "";
    const q = query(collection(db, "classes"), where("teacherId", "==", uid));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        
        // Создаем карточку
        const card = document.createElement('div');
        card.className = 'class-card';
        
        card.innerHTML = `
            <div class="class-card-header">
                <h3>${data.name}</h3>
                <span>Lyceo</span>
            </div>
            <div class="class-card-body">
                <div class="avatar">👨‍🏫</div>
                <div>
                    <div style="font-size: 14px; font-weight: 500;">Ви (Вчитель)</div>
                    <div style="font-size: 12px; color: #5f6368;">${data.teacherEmail}</div>
                </div>
            </div>
        `;
        
        classList.appendChild(card);
    });
}