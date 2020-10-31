const primary = '63, 81, 181';
const secondary = '255, 235, 59';

const left = primary;
const right = '255, 82, 82';

const lineGraphColors = [{
    borderColor: `rgb(${primary})`,
    backgroundColor: `rgba(${primary}, 0)`,
    pointBackgroundColor: `rgba(${primary}, 1)`,
    pointBorderColor: `#fff`,
    pointHoverBackgroundColor: `#fff`,
    pointHoverBorderColor: `rgba(${primary}, 0.8)`
}, {
    borderColor: `rgb(${secondary})`,
    backgroundColor: `rgba(${secondary}, 0)`,
    pointBackgroundColor: `rgba(${secondary}, 1)`,
    pointBorderColor: `#fff`,
    pointHoverBackgroundColor: `#fff`,
    pointHoverBorderColor: `rgba(${secondary}, 0.8)`
}]

const radarGraphColors = [{
    borderColor: `rgb(${primary})`,
    backgroundColor: `rgba(${primary}, 0.2)`,
    pointBackgroundColor: `rgba(${primary},1 )`,
    pointBorderColor: `#fff`,
    pointHoverBackgroundColor: `#fff`,
    pointHoverBorderColor: `rgba(${primary}, 0.8)`
}, {
    borderColor: `rgb(${secondary})`,
    backgroundColor: `rgba(${secondary}, 0.2)`,
    pointBackgroundColor: `rgba(${secondary}, 1)`,
    pointBorderColor: `#fff`,
    pointHoverBackgroundColor: `#fff`,
    pointHoverBorderColor: `rgba(${secondary}, 0.8)`
}]

const barGraphColors = [{
    borderColor: `rgb(${left})`,
    backgroundColor: `rgba(${left}, 0.7)`,
}, {
    borderColor: `rgb(${right})`,
    backgroundColor: `rgba(${right}, 0.7)`,
}]


const lineGraphOptionsDefaults = {
    tooltips: {intersect: false},
    legend: {
        display: true,
        position: 'bottom'
    },
    scales: {
        yAxes: [{display: false}],
        xAxes: [{display: false}]
    },
    layout: {padding: 5},
    responsive: true,
    maintainAspectRation: false,
}

const radarGraphOptionsDefaults = {
    legend: {
        display: true,
        position: 'top'
    },
    tooltips: {intersect: false},
    scale: {ticks: {min: 0, suggestedMax: 11}},
    responsive: true,
    maintainAspectRatio: false,
}

const barGraphOptionsDefaults = {
    legend: {
        display: true,
        position: 'bottom'
    },
    responsive: true,
    maintainAspectRation: false,
}

export {
    barGraphColors,
    barGraphOptionsDefaults,
    lineGraphColors,
    lineGraphOptionsDefaults,
    radarGraphColors,
    radarGraphOptionsDefaults
}
