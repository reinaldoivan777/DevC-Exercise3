var planets = []

fetch('https://swapi.co/api/planets/')
    .then(response => {
        return response.json()
    })
    .then(json => {
        planets = json.results
        showData(planets)
    })

function filter(query) {
    data = planets.filter(planet => {
        return planet.name.toLowerCase().includes(query) || planet.rotation_period.includes(query) || planet.orbital_period.includes(query) || planet.diameter.includes(query) || planet.climate.toLowerCase().includes(query) || planet.gravity.toLowerCase().includes(query) || planet.terrain.toLowerCase().includes(query) ||
        planet.population.includes(query)
    })
    showData(data)
}

var searchPlanet = document.getElementById('searchPlanet')
searchPlanet.addEventListener('keyup', event => {
    filter(event.target.value)
})

function showData(planets) {
    var tr, td;
    var tbody = document.getElementById('planet');
    tbody.innerHTML = '';
    for(var i=0; i< planets.length; i++) {
        tr = tbody.insertRow(tbody.rows.length)
        td= tr.insertCell(tr.cells.length)
        td.setAttribute('align', 'center')
        td.innerHTML=i+1;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].name
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].rotation_period;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].orbital_period;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].diameter;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].climate;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].gravity;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].terrain;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML=planets[i].population;
    }
}