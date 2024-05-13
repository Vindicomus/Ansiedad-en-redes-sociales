document.addEventListener('DOMContentLoaded', function() {
    const ctx1 = document.getElementById('myChart1');
    const ctx2 = document.getElementById('myChart2');
    const ctx3 = document.getElementById('myChart3');
    const ctx4 = document.getElementById('myChart4');
    const ctx5 = document.getElementById('myChart5');
    const ctx6 = document.getElementById('myChart6');

    new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
        label: '¿Con que frecuencia revisas tus redes sociales?',
        data: [0, 12, 24, 8, 6],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
        ],
        hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        },
        }
    }
    });

    new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
        label: '¿Compartes contenido en tus redes sociales?',
        data: [4, 12, 24, 6, 4],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
        ],
        hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
        label: '¿Compruebas la veracidad del contenido compartido?',
        data: [36, 12, 24, 2, 0],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
        ],
        hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
        label: '¿Dependes de redes sociales para mantenerte informado/a?',
        data: [1, 10, 14, 22, 3],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
        ],
        hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
        label: '¿Experimentas ansiedad sin revisar tus redes sociales?',
        data: [12, 14, 16, 6, 2],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
        ],
        hoverOffset: 4
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    new Chart(ctx6, {
        type: 'doughnut',
        data: {
        labels: ['Hombre', 'Mujer', 'No binario'],
        datasets: [{
            label: 'Género',
            data: [42, 4, 4], // Ejemplo de datos, puedes reemplazarlos con los valores reales
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 40
        }]
        },
        options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
});

