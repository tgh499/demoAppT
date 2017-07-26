$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [
            {
                "Period": "2014 Q1",
                "Biostat": 5,
                "Bioinfo": 1,
                "Epide": 2
            },
            {
                "Period": "2014 Q2",
                "Biostat": 6,
                "Bioinfo": 4,
                "Epide": 2
            },
            {
                "Period": "2014 Q3",
                "Biostat": 9,
                "Bioinfo": 5,
                "Epide": 3
            },
            {
                "Period": "2014 Q4",
                "Biostat": 7,
                "Bioinfo": 8,
                "Epide": 4
            },
            {
                "Period": "2015 Q1",
                "Biostat": 8,
                "Bioinfo": 10,
                "Epide": 3
            },
            {
                "Period": "2015 Q2",
                "Biostat": 14,
                "Bioinfo": 10,
                "Epide": 2
            },
            {
                "Period": "2015 Q3",
                "Biostat": 12,
                "Bioinfo": 13,
                "Epide": 5
            },
            {
                "Period": "2015 Q4",
                "Biostat": 8,
                "Bioinfo": 14,
                "Epide": 3
            },
            {
                "Period": "2016 Q1",
                "Biostat": 9,
                "Bioinfo": 15,
                "Epide": 2
            },
            {
                "Period": "2016 Q2",
                "Biostat": 10,
                "Bioinfo": 13,
                "Epide": 1
            }],
        xkey: 'Period',
        ykeys: ['Biostat', 'Bioinfo', 'Epide'],
        labels: ['Biostatistics', 'Bioinfomatics', 'Epidemiology'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Breast Cancer",
            value: 20
        }, {
            label: "Lung Cancer",
            value: 28
        }, {
            label: "Ovarin Cancer",
            value: 6
        }, {
            label: "Pancreatic Cancer",
            value: 3
        }, {
            label: "Prostate",
            value: 3
        }, {
            label: "Other",
            value: 3
        }],


        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            Disease: 'Ovarin',
            Tumor: 110,
            Normal: 10
        }, {
            Disease: 'Breast',
            Tumor: 250,
            Normal: 50
        }, {
            Disease: 'Pancreatic',
            Tumor: 80,
            Normal: 30
        }, {
            Disease: 'Prostate',
            Tumor: 165,
            Normal: 70
        }, {
            Disease: 'Lung',
            Tumor: 50,
            Normal: 80
        }],
        xkey: 'Disease',
        ykeys: ['Tumor', 'Normal'],
        labels: ['Tumor', 'Normal'],
        hideHover: 'auto',
        resize: true
    });
    
});
