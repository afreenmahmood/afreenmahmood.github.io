var tickLabels = {
    0: 'beginner',
    25: 'Intermediate',
    50: 'Adept',
    75: 'Highly Experienced',
    100: 'Professionaly Experienced'
}

var skillData = {
    labels: ["Recruitment", "People Development", "Policy Development", "Organizational Development", "Documentation" , " Admin Support", "Employee Counseling"],
    datasets: [
        {
            borderColor: "rgba(73, 252, 212, 0.4)",
            backgroundColor: "rgb(52, 152, 219, 0.5)",
            pointColor: "rgba(255,255,255)",
            pointBackgroundColor: "rgba(73, 252, 212, 0.6",
            strokeColor: "rgba(255,255,255)",           
            data: [100, 75, 85, 75, 100, 85, 70]
        },
    ]
};



var radarOptions = {
    scale: {
        display: true,
        angleLines: {
            display: true,
            lineWidth: 0.8,
            color: 'rgba(0, 0, 0,0.4)',
        },
        responsive: true,
        ticks: {
            display: false,
            fontSize: 18,
            min: 5,
            max: 100,
            showLabelBackdrop: false
        },
        lineArc: true,
        pointLabels: {
            fontSize: 9,
            fontStyle: 'normal',
            fontColor: 'rgba(255, 255, 255,0.8)',
            fontFamily: "'Lato', sans-serif",
           // lineHeight: normal
        },
    },
    legend: { display: false },
};

var ctx1 = document.getElementById('skills').getContext('2d');

var skillsRadar = new Chart(ctx1, {
    type: 'radar',
    data: skillData,
    options: radarOptions,
});

