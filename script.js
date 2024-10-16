document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const teamMembers = document.querySelectorAll('.card');
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const name = member.getAttribute('data-name');
        const role = member.getAttribute('data-role');
        const image = member.getAttribute('data-image');
        
        document.getElementById('modalName').innerText = name;
        document.getElementById('modalRole').innerText = role;
        document.getElementById('modalImage').src = image;
    });
});



